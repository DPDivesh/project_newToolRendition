import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

export function Email(props: { firstName?: string; url?: any }) {
  const { url } = props;

  return (
    <Html lang="en">
      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Title</dt>
            <dd className="text-gray-700 sm:col-span-2">Mr</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Occuputation</dt>
            <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Salary</dt>
            <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Bio</dt>
            <dd className="text-gray-700 sm:col-span-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              facilis debitis explicabo doloremque impedit nesciunt dolorem
              facere, dolor quasi veritatis quia fugit aperiam aspernatur neque
              molestiae labore aliquam soluta architecto?
            </dd>
          </div>
        </dl>
      </div>
      <Button href={url}>Click me</Button>
    </Html>
  );
}

export default Email;
