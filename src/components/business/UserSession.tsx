/***
 * @description: this is a client component to display user session information
 */

"use client";
import { SessionProvider, useSession } from "next-auth/react";

const UserSession = () => {
  const { data: session, status } = useSession();

  const userEmail = session?.user?.email || "No email";

  console.log("Session data:", JSON.stringify(session, null, 2));

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return <p>Signed in as {userEmail}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
};

const SessionedComponent = () => {
  return (
    <SessionProvider>
      <UserSession />
    </SessionProvider>
  );
};

export { SessionedComponent as UserSession };
