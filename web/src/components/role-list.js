import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import { ucfirst } from "../lib/string-utils";

import * as styles from "./role-list.module.css";

function RoleList({ items, title }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item._key} className={styles.listItem}>
            <div>
              <div className={styles.avatar}>
              </div>
            </div>
            <div>
              {item.roles && (
                <div>
                  {item.roles.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>;
                      case idx === item.roles.length - 1:
                        return <span key={role}> & {role}</span>;
                      default:
                        return <span key={role}>, {role}</span>;
                    }
                  })}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleList;
