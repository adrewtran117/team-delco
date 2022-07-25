import React, { useEffect } from 'react';
import { withWebChat } from '@ibm-watson/assistant-web-chat-react';

const MyLocation = ({ location, createWebChatInstance }) => {

  useEffect(() => {
    function onWebChatLoad(instance) {
      instance.render();
    }

    // A web chat configuration options object as documented at https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration#configurationobject
    const webChatOptions = {
      integrationID: '74dcb338-33c3-4a21-92f8-f2fb1b6a6a47',
      region: 'us-east',
      serviceInstanceID: 'c452655d-4754-4ebc-bfc0-84476c703b5b',
      onLoad: onWebChatLoad
    };

    createWebChatInstance(webChatOptions);
  }, []);

  return <div></div>;
};

// Wrap the component with the method returned by `withWebChat`.
export default withWebChat()(MyLocation);