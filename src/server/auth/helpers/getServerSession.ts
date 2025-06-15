import type {
    GetServerSidePropsContext,
    NextApiRequest,
    NextApiResponse,
} from "next";
import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "../constants";

/**
 * Get the server session for the current user.
 * @param args The request and response objects.
 * @returns The server session or null if not authenticated.
 */
function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, AUTH_OPTIONS);
}


export { auth as getServerSession };
