import React from 'react';

const Blog = () => {
    return (

        <div className='mt-5'>
            <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded'>
                <h1>What is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded'>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Other options to implement authentication are:

                    1.STYTCH.
                    2.Ory.
                    3.Supabase.
                    4.Okta.
                    5.PingIdentity.
                    6.Keycloak.
                    7.Frontegg.
                    8.Authress.</p>
            </div>
            <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded'>
                <h1>How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='container-fluid question w-50 border mb-5 shadow-lg p-3 bg-body rounded'>
                <h1>What is Node? How does Node work?</h1>
                <p>Node is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node basically works on two concept

                    1.Asynchronous
                    2.Non-blocking I/O</p>
            </div>
        </div>

    );
};

export default Blog;