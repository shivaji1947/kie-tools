/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { useMemo, useState } from "react";
import { Page, PageSection } from "@patternfly/react-core";
import { EmbeddedDivPingPong } from "@kogito-tooling-examples/ping-pong-view/dist/embedded/div";
import { PingPongChannelApi } from "@kogito-tooling-examples/ping-pong-view/dist/api";
import { StatsSidebar } from "./StatsSidebar";
import { PingPongReactImplFactory } from "@kogito-tooling-examples/ping-pong-view-react";

let pings = 0;
let pongs = 0;

export function PingPongDivViewsPage() {
  const [lastPing, setLastPing] = useState<string>("-");
  const [lastPong, setLastPong] = useState<string>("-");

  const api: PingPongChannelApi = useMemo(() => {
    return {
      pingPongView__ping(source: string) {
        pings++;
        setLastPing(source);
      },
      pingPongView__pong(source: string, replyingTo: string) {
        pongs++;
        setLastPong(source);
      },
    };
  }, [pings, pongs]);

  const pingPongViewFactory = useMemo(() => new PingPongReactImplFactory(), []);

  return (
    <Page>
      <div className={"webapp--page-main-div"}>
        <StatsSidebar lastPing={lastPing} lastPong={lastPong} pings={pings} pongs={pongs} />
        <div className={"webapp--page-ping-pong-view"}>
          <PageSection>
            <EmbeddedDivPingPong
              {...api}
              name={"React 1"}
              targetOrigin={window.location.origin}
              mapping={{ title: "Ping-Pong Page in React" }}
              pingPongViewFactory={pingPongViewFactory}
            />
          </PageSection>

          <PageSection>
            <EmbeddedDivPingPong
              {...api}
              name={"React 2"}
              targetOrigin={window.location.origin}
              mapping={{ title: "Ping-Pong Page in React" }}
              pingPongViewFactory={pingPongViewFactory}
            />
          </PageSection>

          <PageSection>
            <EmbeddedDivPingPong
              {...api}
              name={"React 3"}
              targetOrigin={window.location.origin}
              mapping={{ title: "Ping-Pong Page in React" }}
              pingPongViewFactory={pingPongViewFactory}
            />
          </PageSection>
        </div>
      </div>
    </Page>
  );
}