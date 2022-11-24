import React from 'react';

const Blog = () => {
    return (
        <div>
            <ul className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">What is cors?</h3>

                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                                In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Why are you using firebase? What other options do you have to implement authentication?</h3>
                            <p className="mb-5 ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Firebase is Google’s mobile application development platform. It has a lot of different products that cover much of what’s needed to build a mobile app. It would take a lot of time to describe the complete set of situations where Firebase can be helpful, so I suggest you start reading the web site to discover what all it can do. The bottom line is that there are a lot of things that you probably don’t want to manage yourself, such as building and maintaining a scalable database and file store, (serverless) backend code, notifications, analytics, and more. Don’t build all this yourself, just use Firebase.</p>
                            <p className="ml-12 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-5 dark:text-gray-300">
                                <h1 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Other authentications</h1>
                                <ul style={{ listStyle: 'square' }}>
                                    <li>Ory</li>
                                    <li>Supabase</li>
                                    <li>Okta</li>
                                    <li>STYTCH</li>
                                    <li>Amazon</li>
                                    <li>Platforms</li>
                                    <li>Cognito</li>
                                    <li>OneLogin</li>
                                    <li>PingIdentity</li>
                                </ul>
                            </p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">How does the private route work?</h3>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article>
                        <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">What is Node? How does Node work?</h3>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The functionality of running scripts server-side produces dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
                        </div>
                    </article>
                </li>
            </ul>
        </div >
    );
};

export default Blog;