import React from "react";
import "../Contact/Contact.css";
import NavBar from "../NavBar/NavBar";

const Contact = () => {
  return (
    <>
      <div className="sctn-wrppr bg-[#f5f5f5] overflow-hidden">
        <div className="box-wrppr">
          <div className="contact-main">
            <div className="cd">
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="30px"
                  height="30px"
                  fillRule="nonzero"
                >
                  <g
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(8,8)">
                      <path d="M11.46875,5c-3.55078,0-6.46875,2.91406-6.46875,6.46875v9.0625c0,3.55078,2.91406,6.46875,6.46875,6.46875h9.0625c3.55078,0,6.46875-2.91406,6.46875-6.46875v-9.0625c0-3.55078-2.91406-6.46875-6.46875-6.46875zM11.46875,7h9.0625c2.47266,0,4.46875,1.99609,4.46875,4.46875v9.0625c0,2.47266-1.99609,4.46875-4.46875,4.46875h-9.0625c-2.47266,0-4.46875-1.99609-4.46875-4.46875v-9.0625c0-2.47266,1.99609-4.46875,4.46875-4.46875zM21.90625,9.1875c-0.50391,0-0.90625,0.40234-0.90625,0.90625c0,0.50391,0.40234,0.90625,0.90625,0.90625c0.50391,0,0.90625-0.40234,0.90625-0.90625c0-0.50391-0.40234-0.90625-0.90625-0.90625zM16,10c-3.30078,0-6,2.69922-6,6c0,3.30078,2.69922,6,6,6c3.30078,0,6-2.69922,6-6c0-3.30078-2.69922-6-6-6zM16,12c2.22266,0,4,1.77734,4,4c0,2.22266-1.77734,4-4,4c-2.22266,0-4-1.77734-4-4c0-2.22266,1.77734-4,4-4z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>

            <div className="cd">
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="30px"
                  height="30px"
                >
                  <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg>
              </a>
            </div>
            <div className="cd">
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="dribble"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  width="30px"
                  height="30px"
                >
                  <path d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path>
                  <path
                    fill="#ea4c89"
                    d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#ea4c89"
                    strokeMiterlimit="10"
                    d="M28.352 36.914c0 0-3.032-21.087-15.63-34.292M1.269 17.848c0 0 24.2 2.117 32.075-11.102M7.804 34.152c0 0 8.624-19.807 31.058-12.194"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="cd">
              {" "}
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="codepen"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                >
                  <path d="M25 4L4 17.34375L4 32.652344L25 46L46 32.65625L46 17.34375ZM25 29.183594L19.066406 25.070313L25 21.023438L30.933594 25.070313ZM27 17.605469L27 9.949219L40.429688 18.484375L34.410156 22.65625ZM23 17.605469L15.589844 22.65625L9.570313 18.484375L23 9.949219ZM12.09375 25.042969L8 27.832031L8 22.203125ZM15.570313 27.453125L23 32.605469L23 40.050781L9.589844 31.527344ZM27 32.605469L34.429688 27.453125L40.410156 31.527344L27 40.050781ZM37.90625 25.042969L42 22.203125L42 27.832031Z"></path>
                </svg>
              </a>
            </div>
            <div className="cd">
              <svg
                className="uiverse"
                width="23px"
                height="23px"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"
                  fill="url(#paint0_linear_501_142)"
                ></path>
                <path
                  d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"
                  fill="url(#paint1_linear_501_142)"
                ></path>
                <path
                  d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"
                  fill="url(#paint2_linear_501_142)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_501_142"
                    x1="0"
                    y1="0"
                    x2="96.1684"
                    y2="87.6201"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BF66FF"></stop>
                    <stop offset="0.510417" stopColor="#6248FF"></stop>
                    <stop offset="1" stopColor="#00DDEB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_501_142"
                    x1="0"
                    y1="0"
                    x2="96.1684"
                    y2="87.6201"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BF66FF"></stop>
                    <stop offset="0.510417" stopColor="#6248FF"></stop>
                    <stop offset="1" stopColor="#00DDEB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_501_142"
                    x1="0"
                    y1="0"
                    x2="96.1684"
                    y2="87.6201"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BF66FF"></stop>
                    <stop offset="0.510417" stopColor="#6248FF"></stop>
                    <stop offset="1" stopColor="#00DDEB"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="cd">
              {" "}
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="discord"
                  height="30px"
                  width="30px"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                </svg>
              </a>
            </div>
            <div className="cd">
              {" "}
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="github"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
            <div className="cd">
              {" "}
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="telegram"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="30px"
                  height="30px"
                >
                  <path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                  <path
                    fill="#fff"
                    d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                  ></path>
                  <path
                    fill="#b0bec5"
                    d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="cd">
              <a href="https://www.instagram.com/your_username">
                <svg
                  className="reddit"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.google.com"
                  version="1.1"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      borderRadius: "50%",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <circle
                      cx="45"
                      cy="45"
                      r="45"
                      style={{
                        stroke: "none",
                        strokeWidth: 0,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                    ></circle>
                    <path
                      d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>

            <p className="text">
              HOVER
              <br />
              <br />
              FOR
              <br />
              <br />
              SOCIAL
            </p>
            <div className="main_back"></div>
          </div>

          <div className="form-wrppr xs:h-lvh">
            <form action="#" method="POST">
              <h2 className="form-title text-[royalblue] opacity-62">
                LOVE TO HEAR FROM YOU, GET IN TOUCH
              </h2>
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="text"
                    className="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input type="email" className="email" placeholder="Mail" />
                </div>
                <div className="form-group">
                  <input type="text" className="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Write Your Message...."
                  ></textarea>
                </div>
              </div>
              <div className="submit">
                <button className="submit-button">
                  <span>
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#ffffff"
                          d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
                        ></path>
                      </g>
                    </svg>
                  </span>

                  <span>Sure ?</span>
                  <span>
                    Done!
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          stroke="#ffffff"
                          d="M8.00011 13L12.2278 16.3821C12.6557 16.7245 13.2794 16.6586 13.6264 16.2345L22.0001 6"
                        ></path>
                        <path
                          fill="#ffffff"
                          d="M11.1892 12.2368L15.774 6.63327C16.1237 6.20582 16.0607 5.5758 15.6332 5.22607C15.2058 4.87635 14.5758 4.93935 14.226 5.36679L9.65273 10.9564L11.1892 12.2368ZM8.02292 16.1068L6.48641 14.8263L5.83309 15.6248L2.6 13.2C2.15817 12.8687 1.53137 12.9582 1.2 13.4C0.868627 13.8419 0.95817 14.4687 1.4 14.8L4.63309 17.2248C5.49047 17.8679 6.70234 17.7208 7.381 16.8913L8.02292 16.1068Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
