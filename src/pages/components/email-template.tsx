import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

export function Email(props: { firstName?: string; url?: any; text?: any }) {
  return (
    <Html lang="en">
      <div className="flow-root">
        <div className="overflow-x-auto">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr style={{ backgroundColor: "#f8f8f8" }}>
                {props.text.map((text: any) => (
                  <td
                    style={{
                      whiteSpace: "nowrap",
                      padding: "10px",
                      fontWeight: "bold",
                      color: "#333333",
                    }}
                  >
                    {text}
                  </td>
                ))}
                <td
                  style={{
                    whiteSpace: "nowrap",
                    padding: "10px",
                    fontWeight: "bold",
                    color: "#333333",
                  }}
                >
                  John Doe
                </td>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    padding: "10px",
                    color: "#555555",
                  }}
                >
                  24/05/1995
                </td>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    padding: "10px",
                    color: "#555555",
                  }}
                >
                  Web Developer
                </td>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    padding: "10px",
                    color: "#555555",
                  }}
                >
                  $120,000
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    padding: "10px",
                    fontWeight: "bold",
                    color: "#333333",
                  }}
                >
                  Jane Doe
                </td>
                <td
                  style={{
                    whiteSpace: "nowrap",
                    padding: "10px",
                    color: "#555555",
                  }}
                >
                  04/11/1980
                </td>
                {/* ... */}
              </tr>
              {/* ... */}
            </tbody>
          </table>
          {/* ... */}
        </div>
      </div>
    </Html>
  );
}
