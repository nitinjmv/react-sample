import { MouseEvent } from "react";
import { Card } from "react-bootstrap";

export const Calculator = () => {
  function handleClick(e: MouseEvent) {
    console.log();
  }

  return (
    <Card>
      <Card.Title>
        Calculator <br />
        <input type="text" />
      </Card.Title>
      <Card.Body>
        <table>
          {(() => {
            const row = [];
            for (let i = 0; i <= 9; i++) {
              row.push(
                <td>
                  <button onClick={(e) => handleClick(e)}>{i}</button>
                </td>
              );
            }
            return row;
          })()}
          <tr>
            <td>
              <button>+</button>
            </td>
            <td>
              <button>-</button>
            </td>
            <td>
              <button>/</button>
            </td>
            <td>
              <button>%</button>
            </td>
          </tr>
        </table>
      </Card.Body>
    </Card>
  );
};
