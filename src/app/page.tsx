import { UserSession } from "@/components/business";
import { Button } from "@/components/ui";

export default async function Home() {
  return (
    <div className="h-screen">
      root page
      <UserSession />
      <Button>click</Button>
    </div>
  );
}
