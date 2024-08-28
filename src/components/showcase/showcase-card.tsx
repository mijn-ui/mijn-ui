import React from "react";
import LinkCard from "./link-card";
import { Card, CardContent, CardDescription, CardTitle } from "../mijn-ui/Card";
import Button from "../mijn-ui/Button";
import { LuArrowUpRight, LuPlus } from "react-icons/lu";

const ShowcaseCard = () => {
  return (
    <LinkCard
      href="https://mijnui.com/docs/?path=/docs/components-card--docs"
      label="Card"
    >
      <Card className="relative max-w-60">
        <Button
          className="h-9 w-9 rounded-md bg-accent p-0 text-lg text-card-foreground"
          renderAs="span"
          size="icon"
          variant="ghost"
        >
          <LuPlus />
        </Button>
        <div className="absolute right-4 top-4 text-xl text-card-description">
          <LuArrowUpRight />
        </div>
        <CardContent>
          <CardTitle className="text-sm">Users</CardTitle>
          <CardDescription className="text-xs font-normal">
            Manage user accounts and permissions.
          </CardDescription>
        </CardContent>
      </Card>
    </LinkCard>
  );
};

export default ShowcaseCard;
