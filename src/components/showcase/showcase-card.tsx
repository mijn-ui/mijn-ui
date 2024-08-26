import React from "react";
import LinkCard from "./link-card";
import { Card, CardContent, CardDescription, CardTitle } from "../mijn-ui/Card";
import Button from "../mijn-ui/Button";
import { LuArrowUpRight, LuPlus } from "react-icons/lu";

const ShowcaseCard = () => {
  return (
    <LinkCard href="https://mijnui.com/docs/?path=/docs/components-card--docs" label="Card">
      <Card className="relative max-w-60">
        <Button className="rounded-md bg-accent p-0 text-card-foreground text-lg w-9 h-9" renderAs="span" size="icon" variant="ghost">
          <LuPlus />
        </Button>
        <div className="absolute text-xl right-4 top-4 text-card-description">
          <LuArrowUpRight />
        </div>
        <CardContent>
          <CardTitle className="text-sm">Users</CardTitle>
          <CardDescription className="text-xs font-normal">Manage user accounts and permissions.</CardDescription>
        </CardContent>
      </Card>
    </LinkCard>
  );
};

export default ShowcaseCard;
