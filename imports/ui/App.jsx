import React, { useEffect, useState } from "react";

export const App = () => {
  useEffect(() => {
    let isPointerLocked = false;

    window.addEventListener("click", () => {
      if (!isPointerLocked) document.body.requestPointerLock();
    });

    document.addEventListener("pointerlockchange", () => {
      isPointerLocked = document.pointerLockElement === document.body;
    });

    window.addEventListener("mousemove", (e) => {});
  }, []);

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
    </div>
  );
};
