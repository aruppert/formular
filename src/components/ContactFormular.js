import React from "react";

export function createFormular() {
  return (
    <>
      <form>
        <div>
          <div>
            First Name
            <input type="text" />
          </div>
          <div>
            Last Name
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            E-Mail
            <input type="text" />
          </div>
          <div>
            Telephone
            <input type="number" />
          </div>
        </div>
        <div>
          Text
          <text-area type="text" />
        </div>
      </form>
    </>
  );
}
