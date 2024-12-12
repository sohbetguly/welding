const glowButton = document.querySelectorAll(".btn-glow");
const btnSliding = document.querySelectorAll(".btn-sliding");
const btnGlowingBorder = document.querySelectorAll(".btn-glowing-border");
const rippleBtns = document.querySelectorAll(".ripple-button");
const glidingBtns = document.querySelectorAll(".btn-gliding");
const bounceBtns = document.querySelectorAll(".btn-bouncing");

console.log("Hello");

for (const button of glowButton) {
  const span = document.createElement("span");
  span.innerText = button.innerText;
  button.innerHTML = "";
  button.appendChild(span);
  button.addEventListener("click", () => {
    button.classList.toggle("is-closed");
  });
}

for (const button of btnSliding) {
  const span = document.createElement("span");
  span.innerText = button.innerText;
  button.innerText = "";
  button.appendChild(span);

  button.addEventListener("mouseenter", ({ clientY }) => {
    const { top, height } = button.getBoundingClientRect();
    const midpoint = top + height / 2;

    if (clientY < midpoint) {
      button.style.setProperty("--btn-duration", "0");
      button.style.setProperty("--btn-translate-y", "-100%");
      setTimeout(() => {
        button.style.setProperty("--btn-duration", "300ms");
        button.style.setProperty("--btn-translate-y", "0");
      }, 10);
    } else {
      button.style.setProperty("--btn-duration", "0");
      button.style.setProperty("--btn-translate-y", "100%");
      setTimeout(() => {
        button.style.setProperty("--btn-duration", "300ms");
        button.style.setProperty("--btn-translate-y", "0");
      }, 10);
    }
  });

  button.addEventListener("mouseleave", ({ clientY }) => {
    const { top, height } = button.getBoundingClientRect();
    const midpoint = top + height / 2;

    if (clientY < midpoint) {
      button.style.setProperty("--btn-translate-y", "-100%");
    } else {
      button.style.setProperty("--btn-translate-y", "100%");
    }
  });
}

for (const button of btnGlowingBorder) {
  const span = document.createElement("span");
  const btnGradient = document.createElement("span");
  btnGradient.classList.add("btn-gradient");
  span.innerHTML = button.innerText;
  button.innerHTML = "";
  button.appendChild(span);
  button.appendChild(btnGradient);

  button.addEventListener("mousemove", (e) => {
    const { left, top } = button.getBoundingClientRect();
    const { clientX, clientY } = e;
    const x = clientX - left;
    const y = clientY - top;
    button.style.setProperty("--cordinate-x", `${x}px`);
    button.style.setProperty("--cordinate-y", `${y}px`);
  });
}

for (const button of rippleBtns) {
  setInterval(() => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }, 1200);

  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    button.classList.add("btn-active");

    setTimeout(() => {
      button.classList.remove("btn-active");
    }, 400);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    // const innerCircle = document.createElement("span");
    // innerCircle.classList.add("inner-circle");

    // const { clientX, clientY } = e;
    // const { left, top } = button.getBoundingClientRect();

    // innerCircle.style.setProperty("--btn-left", `${clientX - left}px`);
    // innerCircle.style.setProperty("--btn-top", `${clientY - top}px`);

    // this.appendChild(innerCircle);

    // innerCircle.addEventListener("animationend", () => {
    //   innerCircle.remove();
    // });
  });
}

for (const btn of glidingBtns) {
  const span = document.createElement("span");
  span.classList.add("span-el");
  span.innerText = btn.innerText;
  btn.appendChild(span);
}

for (const btn of bounceBtns) {
  const chars = btn.innerText.split("");
  btn.innerText = "";
  const containerSpan = document.createElement("span");

  const { length } = chars;
  const half = length / 2;

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp";
    } else {
      span.innerText = char;
    }

    // span.style.setProperty("--scale", );

    const part = i >= half ? -1 : 1;
    const position = i >= half ? half - i + (half - 1) : i;
    const move = position / half;
    const rotate = 1 - move;

    span.style.setProperty("--char", i);
    span.style.setProperty("--move", move);
    span.style.setProperty("--rotate", rotate);
    span.style.setProperty("--part", part);

    span.classList.add("char");
    containerSpan.appendChild(span);
    btn.appendChild(containerSpan);
  }

  btn.addEventListener("mouseenter", ({ clientY }) => {
    const { top, height } = btn.getBoundingClientRect();
    const midpoint = top + height / 2;

    btn.classList.remove("bounce-out");
    btn.classList.add("bounce-in");
    btn.style.setProperty("--animation-type", "bounce-in");

    if (clientY < midpoint) {
      btn.style.setProperty("--btn-duration", 0);
      btn.style.setProperty("--btn-translate-y", "-100%");

      setTimeout(() => {
        btn.style.setProperty("--btn-duration", "700ms");
        btn.style.setProperty("--btn-translate-y", "-25%");
      }, 10);
    } else {
      btn.style.setProperty("--btn-duration", 0);
      btn.style.setProperty("--btn-translate-y", "100%");

      setTimeout(() => {
        btn.style.setProperty("--btn-duration", "700ms");
        btn.style.setProperty("--btn-translate-y", "-25%");
      }, 10);
    }
  });

  btn.addEventListener("mouseleave", ({ clientY }) => {
    const { top, height } = btn.getBoundingClientRect();
    const midpoint = top + height / 2;

    btn.classList.remove("bounce-in");
    btn.classList.add("bounce-out");
    btn.style.setProperty("--animation-type", "bounce-out");

    setTimeout(() => {
      btn.classList.remove("bounce-out");
      btn.style.setProperty("--animation-type", "bounce");
    }, 500);

    if (clientY < midpoint) {
      btn.style.setProperty("--btn-translate-y", "-100%");
    } else {
      btn.style.setProperty("--btn-translate-y", "100%");
    }
  });
}
