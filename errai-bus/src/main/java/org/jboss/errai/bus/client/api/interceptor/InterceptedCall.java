/*
 * Copyright 2011 JBoss, by Red Hat, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.jboss.errai.bus.client.api.interceptor;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

/**
 * Indicates that calls to the annotated method will be intercepted by an interceptor of the provided type.
 * 
 * When used on a class or interface the interceptor will be applied for all methods of the corresponding type.
 * 
 * @author Christian Sadilek <csadilek@redhat.com>
 */
@Target({ ElementType.TYPE, ElementType.METHOD })
public @interface InterceptedCall {
  Class<? extends CallInterceptor<? extends CallContext>> value();
}