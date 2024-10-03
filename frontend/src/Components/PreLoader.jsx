// src/components/Preloader.js
import React from "react";

const Preloader = () => {
  return (
    <div className=" h-screen bg-[#6b3ca4] px-3">
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <svg width="80vw" height="80vh" viewBox="0 0 780 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-draw">
<path className="stroke-linecap-round fill-none" d="M735.137 73.0511L735.127 73.0445C731.651 70.8013 728.934 67.534 726.947 63.3217L726.943 63.3124L726.943 63.3124C724.964 59.0399 724.009 53.8791 724.009 47.8864C724.009 41.737 724.997 36.5073 727.056 32.2667C729.089 28.0574 731.834 24.8312 735.322 22.6788C738.789 20.5305 742.597 19.4546 746.713 19.4546C749.802 19.4546 752.494 19.9795 754.717 21.1145C756.848 22.1692 758.613 23.5178 759.97 25.1786C760.171 25.4178 760.366 25.6572 760.554 25.8968V4.18188V2.68188H762.054H776.543H778.043V4.18188V74.0001V75.5001H776.543H762.224H760.724V74.0001V69.8617C760.446 70.2199 760.152 70.5759 759.843 70.9297M735.137 73.0511L758.713 69.9433M735.137 73.0511C738.615 75.2552 742.498 76.3523 746.747 76.3523C749.722 76.3523 752.342 75.8615 754.548 74.8102M735.137 73.0511L753.906 73.4546M759.843 70.9297L758.713 69.9433M759.843 70.9297C759.843 70.9293 759.844 70.9289 759.844 70.9284L758.713 69.9433M759.843 70.9297C758.459 72.5185 756.68 73.8052 754.548 74.8102M758.713 69.9433C757.486 71.3523 755.884 72.5228 753.906 73.4546M754.548 74.8102C754.55 74.8097 754.551 74.8091 754.552 74.8086L753.906 73.4546M754.548 74.8102C754.548 74.8106 754.547 74.8111 754.546 74.8115L753.906 73.4546M761.611 65.6137C761.355 66.1589 761.06 66.7024 760.724 67.2444L762.224 67.6614V67.1137H761.611V65.6137ZM761.611 65.6137L762.224 65.9013V65.6137H761.611ZM759.63 55.4303L759.63 55.4303L759.626 55.4423C758.84 57.551 757.736 59.113 756.352 60.2091C755.039 61.2442 753.402 61.7955 751.349 61.7955C749.255 61.7955 747.588 61.2349 746.255 60.1834C744.889 59.0646 743.794 57.4894 743.008 55.3824C742.239 53.2379 741.838 50.7246 741.838 47.8183C741.838 44.9314 742.24 42.4532 743.008 40.3569C743.77 38.2762 744.862 36.7268 746.246 35.6307C747.58 34.5746 749.25 34.0114 751.349 34.0114C753.408 34.0114 755.065 34.5551 756.405 35.5784C757.778 36.6276 758.878 38.1497 759.661 40.2328C760.447 42.3208 760.861 44.8385 760.861 47.8183C760.861 50.7936 760.437 53.3205 759.63 55.4303Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M677.146 74.6168L677.146 74.6168L677.156 74.6213C679.991 75.8784 683.181 76.4887 686.696 76.4887C689.415 76.4887 691.87 76.1313 694.037 75.384L694.045 75.3815L694.052 75.3789C696.184 74.6191 698.046 73.5642 699.613 72.1994L699.613 72.1994L699.623 72.1903C700.079 71.7857 700.509 71.362 700.912 70.9192V74V75.5H702.412H716.185H717.685V74V38.6819C717.685 35.3768 717.045 32.4504 715.699 29.9597C714.382 27.5016 712.574 25.4802 710.285 23.9124C708.057 22.3705 705.517 21.2451 702.681 20.524C699.893 19.8094 696.984 19.4546 693.957 19.4546C689.627 19.4546 685.75 20.1133 682.358 21.4699C678.997 22.8 676.209 24.7293 674.035 27.2729C671.862 29.7931 670.415 32.775 669.684 36.1858L669.326 37.8568L671.029 37.9951L684.461 39.086L685.683 39.1852L686.023 38.008C686.425 36.6201 687.241 35.4585 688.539 34.504L688.545 34.4998L688.551 34.4955C689.759 33.5896 691.487 33.0569 693.889 33.0569C696.142 33.0569 697.648 33.5938 698.625 34.4549L698.625 34.4549L698.634 34.4631C699.604 35.3039 700.162 36.5231 700.162 38.341V38.5455C700.162 39.218 699.944 39.5666 699.561 39.8253C698.999 40.2052 697.914 40.5952 696.118 40.8808C694.285 41.1488 691.858 41.4411 688.83 41.7576C686.168 42.0147 683.614 42.4594 681.171 43.0936L681.168 43.0945C678.686 43.7451 676.444 44.716 674.454 46.0176C672.4 47.3617 670.776 49.1408 669.592 51.3325L670.912 52.0455L669.592 51.3325C668.376 53.5839 667.81 56.2882 667.81 59.375C667.81 63.0462 668.608 66.2336 670.3 68.849L670.305 68.8562L670.31 68.8633C671.995 71.4038 674.287 73.3238 677.146 74.6168ZM700.264 51.9987V55.2841C700.264 56.8579 699.87 58.2212 699.103 59.4182C698.323 60.6369 697.242 61.623 695.822 62.3741C694.431 63.0873 692.788 63.466 690.855 63.466C688.865 63.466 687.35 63.0125 686.206 62.2126C685.217 61.4856 684.685 60.4543 684.685 58.8978C684.685 57.8028 684.962 57.0072 685.427 56.4075L685.433 56.4005L685.438 56.3933C685.958 55.705 686.721 55.1134 687.798 54.6515C688.926 54.1681 690.284 53.7996 691.888 53.5641C692.681 53.4508 693.565 53.3262 694.54 53.1902L694.557 53.1878L694.573 53.1851C695.562 53.0242 696.55 52.8518 697.539 52.6679L697.555 52.6649L697.572 52.6614C698.559 52.4547 699.458 52.2342 700.264 51.9987Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M644.125 51.7045V51.7118L644.125 51.7191C644.146 53.855 643.72 55.5318 642.941 56.8305L642.937 56.8373L642.933 56.8442C642.133 58.2109 641.103 59.2115 639.843 59.8904C638.541 60.569 637.146 60.9091 635.636 60.9091C633.247 60.9091 631.479 60.1463 630.166 58.7055C628.841 57.2527 628.09 55.203 628.068 52.3807V21.6364V20.1364H626.568H612.046H610.546V21.6364L610.546 54.9773L610.546 54.9856C610.569 59.2524 611.352 63.0031 612.956 66.1863L612.956 66.1863L612.96 66.1946C614.58 69.3603 616.848 71.8382 619.764 73.5827C622.685 75.3302 626.037 76.1818 629.773 76.1818C633.947 76.1818 637.585 75.1897 640.605 73.1266C642.214 72.0357 643.582 70.7502 644.705 69.2746V74V75.5H646.205H660.148H661.648V74V21.6364V20.1364H660.148H645.625H644.125V21.6364V51.7045Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M584.398 93.6364V95.1364H585.898H600.386H601.886V93.6364V21.6364V20.1364H600.386H586.068H584.568V21.6364V26.1169C584.328 25.8037 584.077 25.4909 583.814 25.1786C582.457 23.5177 580.691 22.1692 578.56 21.1144C576.337 19.9795 573.646 19.4546 570.557 19.4546C566.441 19.4546 562.633 20.5305 559.166 22.6788C555.678 24.8312 552.933 28.0573 550.9 32.2665C548.841 36.5072 547.852 41.7369 547.852 47.8864C547.852 53.879 548.807 59.0398 550.787 63.3124L550.787 63.3124L550.791 63.3217C552.778 67.534 555.495 70.8013 558.971 73.0444L558.971 73.0445L558.981 73.0511C562.459 75.2552 566.341 76.3523 570.591 76.3523C573.566 76.3523 576.185 75.8614 578.392 74.8102C580.525 73.8049 582.304 72.5177 583.688 70.9284C583.934 70.6464 584.171 70.363 584.398 70.0782V93.6364ZM583.474 55.4303L583.474 55.4302L583.469 55.4423C582.684 57.551 581.579 59.113 580.196 60.2091C578.883 61.2442 577.246 61.7955 575.193 61.7955C573.099 61.7955 571.432 61.2349 570.099 60.1833C568.733 59.0645 567.638 57.4894 566.852 55.3824C566.083 53.2378 565.682 50.7245 565.682 47.8182C565.682 44.9314 566.084 42.4532 566.852 40.3569C567.614 38.2762 568.706 36.7268 570.09 35.6307C571.424 34.5746 573.094 34.0114 575.193 34.0114C577.252 34.0114 578.909 34.555 580.249 35.5784C581.622 36.6276 582.721 38.1497 583.505 40.2328C584.291 42.3207 584.705 44.8385 584.705 47.8182C584.705 50.7936 584.281 53.3205 583.474 55.4303Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M525.178 25.7614L525.044 24.4094C524.81 22.0461 523.834 20.3103 522.136 19.0602C520.408 17.7874 517.95 17.0682 514.605 17.0682C512.328 17.0682 510.501 17.3916 509.073 17.9783L509.065 17.9817L509.057 17.985C507.605 18.5618 506.579 19.3295 505.89 20.2449C505.223 21.1611 504.889 22.188 504.889 23.375V23.4023L504.888 23.4295C504.852 24.4241 505.058 25.2123 505.447 25.8559C505.912 26.5842 506.557 27.2394 507.416 27.8137C508.329 28.4011 509.405 28.9314 510.653 29.3975C511.928 29.8509 513.298 30.2424 514.762 30.5703L514.773 30.5727L514.784 30.5752L521.046 32.0727C524.173 32.7736 527.061 33.7114 529.705 34.8917C532.375 36.0836 534.713 37.5615 536.705 39.3342C538.722 41.1297 540.29 43.2521 541.4 45.692C542.548 48.1657 543.115 50.9607 543.139 54.0451L543.139 54.055L543.139 54.0648C543.115 58.6 541.952 62.6063 539.603 66.0201M525.178 25.7614L538.366 65.1705M525.178 25.7614H526.537H540.685H542.209L542.184 24.2368C542.112 19.8108 540.921 15.8604 538.582 12.4377C536.252 9.02778 533.004 6.39478 528.899 4.5222C524.802 2.6425 520.058 1.72729 514.707 1.72729C509.441 1.72729 504.683 2.64473 500.463 4.51503C496.251 6.38161 492.883 9.00474 490.414 12.4024L490.414 12.4024L490.41 12.4081C487.937 15.8453 486.73 19.8518 486.753 24.3644C486.73 29.8882 488.562 34.4205 492.333 37.7891C495.975 41.0425 500.867 43.3706 506.915 44.8425L525.178 25.7614ZM539.603 66.0201C539.602 66.0204 539.602 66.0207 539.602 66.021L538.366 65.1705M539.603 66.0201C539.603 66.0198 539.603 66.0194 539.603 66.0191L538.366 65.1705M539.603 66.0201C537.28 69.4047 533.946 71.9912 529.683 73.8114L529.679 73.813C525.425 75.6157 520.362 76.4887 514.537 76.4887C508.751 76.4887 503.639 75.6024 499.237 73.7841L499.234 73.783C494.835 71.956 491.346 69.2258 488.826 65.5802L488.819 65.5708L488.819 65.5708C486.306 61.8747 485.031 57.3618 484.912 52.1135L484.878 50.5796H486.412H500.696H502.098L502.193 51.9779C502.335 54.0806 502.927 55.7384 503.898 57.0308M538.366 65.1705C536.23 68.2841 533.139 70.7046 529.094 72.4318C525.071 74.1364 520.219 74.9887 514.537 74.9887C508.901 74.9887 503.991 74.125 499.81 72.3978C495.651 70.6705 492.401 68.1137 490.06 64.7273C487.976 61.6632 486.783 57.9473 486.48 53.5796H486.412V52.0796L487.912 52.0456C487.912 52.057 487.912 52.0683 487.912 52.0796H500.696C500.855 54.4205 501.526 56.375 502.707 57.9432M503.898 57.0308C503.896 57.0276 503.893 57.0243 503.89 57.0211L502.707 57.9432M503.898 57.0308C504.92 58.3386 506.291 59.352 508.059 60.057M503.898 57.0308C503.9 57.034 503.903 57.0372 503.905 57.0404L502.707 57.9432M502.707 57.9432C503.912 59.4887 505.514 60.6591 507.514 61.4546M507.514 61.4546C509.537 62.2273 511.821 62.6137 514.366 62.6137C516.866 62.6137 519.037 62.25 520.878 61.5228C522.742 60.7955 524.185 59.7841 525.207 58.4887C526.23 57.1932 526.741 55.7046 526.741 54.0228C526.741 52.4546 526.276 51.1364 525.344 50.0682C524.435 49 523.094 48.0909 521.321 47.3409C519.571 46.5909 517.423 45.9091 514.878 45.2955L507.276 43.3864L506.921 44.8439L514.512 46.7503L514.519 46.752L514.526 46.7537C517.018 47.3544 519.08 48.0125 520.73 48.7197L520.737 48.7224C522.37 49.4134 523.489 50.2038 524.201 51.0404L524.207 51.0474L524.213 51.0543C524.881 51.8195 525.241 52.7757 525.241 54.0228C525.241 55.3742 524.84 56.5339 524.03 57.5592C523.204 58.6049 522 59.4745 520.333 60.1254L520.327 60.1277C518.701 60.77 516.725 61.1137 514.366 61.1137C511.977 61.1137 509.882 60.7517 508.059 60.057M507.514 61.4546L508.069 60.0608C508.065 60.0595 508.062 60.0583 508.059 60.057M507.514 61.4546L508.049 60.0533C508.053 60.0546 508.056 60.0558 508.059 60.057" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M482.373 22.1314L483.071 20.1364H480.957H465.582H464.455L464.142 21.2194L454.467 54.6546L444.762 21.2182L444.448 20.1364H443.321H427.98H425.867L426.564 22.1314L444.871 74.495L445.222 75.5H446.287H462.651H463.715L464.067 74.495L482.373 22.1314Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M385.382 73.0529L385.382 73.0529L385.391 73.058C389.544 75.3895 394.444 76.5228 400.034 76.5228C404.503 76.5228 408.505 75.8408 412.012 74.4382L412.017 74.4362C415.524 73.0187 418.432 71.0275 420.696 68.4431C422.984 65.8349 424.496 62.7812 425.229 59.3101L425.587 57.6172L423.86 57.5033L410.428 56.6169L409.321 56.5438L408.927 57.5817C408.501 58.7048 407.894 59.6248 407.113 60.3684C406.328 61.1162 405.373 61.6896 404.223 62.0794C403.057 62.4746 401.745 62.6819 400.273 62.6819C398.054 62.6819 396.221 62.2169 394.715 61.3485C393.203 60.4758 392.026 59.2393 391.176 57.6004C390.525 56.3114 390.112 54.7974 389.967 53.0341H424.068H425.568V51.5341V47.5455C425.568 42.9554 424.925 38.8831 423.597 35.3592C422.281 31.8419 420.42 28.8762 417.996 26.4995C415.614 24.1426 412.817 22.3808 409.621 21.2177C406.464 20.0376 403.07 19.4546 399.455 19.4546C394.091 19.4546 389.34 20.6435 385.256 23.0747L385.252 23.0768C381.208 25.4984 378.073 28.881 375.859 33.1894C373.641 37.5043 372.557 42.4743 372.557 48.0569C372.557 53.7688 373.639 58.7988 375.861 63.0979L375.862 63.1009C378.083 67.3744 381.262 70.7025 385.382 73.0529ZM408.804 41.0341H390.107C390.311 39.9914 390.67 39.0249 391.18 38.1268L391.18 38.1268L391.184 38.1193C392.009 36.645 393.14 35.4845 394.596 34.6189L394.601 34.6158C396.048 33.7479 397.73 33.2955 399.693 33.2955C401.58 33.2955 403.163 33.7091 404.492 34.4876L404.503 34.4939L404.514 34.5001C405.889 35.2747 406.953 36.3387 407.727 37.7136C408.28 38.6948 408.644 39.7963 408.804 41.0341Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M305.099 74.0001V75.5001H306.599H331.349C338.637 75.5001 344.988 74.0627 350.344 71.1217C355.719 68.1826 359.849 63.9547 362.712 58.4698C365.598 52.9832 367.009 46.4828 367.009 39.0228C367.009 31.5853 365.598 25.1068 362.711 19.6423C359.849 14.1825 355.743 9.97732 350.413 7.06051C345.08 4.11987 338.775 2.68188 331.554 2.68188H306.599H305.099V4.18188V74.0001ZM347.135 51.1436L347.134 51.1478C345.763 54.1377 343.739 56.2996 341.055 57.7035C338.346 59.1094 334.928 59.8523 330.736 59.8523H322.861V18.3296H330.77C334.963 18.3296 338.381 19.0728 341.09 20.4791C343.748 21.859 345.762 24.0074 347.134 27.0001L347.137 27.0078C348.537 30.0162 349.281 33.9952 349.281 39.0228C349.281 44.0974 348.536 48.1117 347.135 51.1436Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M233.802 74.6168L233.802 74.6168L233.812 74.6213C236.647 75.8784 239.837 76.4887 243.352 76.4887C246.071 76.4887 248.527 76.1313 250.694 75.384L250.701 75.3815L250.708 75.3789C252.84 74.6191 254.702 73.5642 256.269 72.1994L256.269 72.1994L256.28 72.1903C256.736 71.7857 257.165 71.362 257.568 70.9191V74V75.5H259.068H272.841H274.341V74V38.6819C274.341 35.3768 273.701 32.4504 272.355 29.9597C271.039 27.5016 269.23 25.4802 266.942 23.9124C264.714 22.3705 262.173 21.2451 259.337 20.524C256.55 19.8094 253.64 19.4546 250.614 19.4546C246.283 19.4546 242.406 20.1133 239.014 21.4699C235.653 22.8 232.865 24.7293 230.691 27.2729C228.518 29.7931 227.071 32.775 226.34 36.1858L225.982 37.8568L227.685 37.9951L241.117 39.086L242.339 39.1852L242.68 38.008C243.081 36.6201 243.897 35.4585 245.195 34.504L245.201 34.4998L245.207 34.4955C246.415 33.5896 248.143 33.0569 250.545 33.0569C252.799 33.0569 254.304 33.5938 255.281 34.4549L255.281 34.4549L255.29 34.4631C256.26 35.3039 256.818 36.5231 256.818 38.341V38.5455C256.818 39.218 256.6 39.5666 256.217 39.8253C255.655 40.2052 254.571 40.5952 252.774 40.8808C250.941 41.1488 248.515 41.4411 245.486 41.7576C242.824 42.0147 240.271 42.4594 237.828 43.0936L237.824 43.0945C235.342 43.7451 233.1 44.716 231.111 46.0176C229.056 47.3617 227.433 49.1408 226.248 51.3325L227.568 52.0455L226.248 51.3325C225.032 53.5839 224.466 56.2882 224.466 59.375C224.466 63.0462 225.264 66.2336 226.957 68.849L226.961 68.8562L226.966 68.8633C228.651 71.4038 230.943 73.3238 233.802 74.6168ZM256.92 51.9987V55.2841C256.92 56.8579 256.527 58.2212 255.76 59.4182C254.979 60.6369 253.898 61.623 252.478 62.3741C251.087 63.0873 249.445 63.466 247.511 63.466C245.521 63.466 244.006 63.0125 242.863 62.2126C241.873 61.4856 241.341 60.4543 241.341 58.8978C241.341 57.8028 241.619 57.0072 242.083 56.4075L242.089 56.4005L242.094 56.3933C242.615 55.705 243.377 55.1133 244.455 54.6515C245.582 54.1681 246.94 53.7996 248.545 53.5641C249.337 53.4508 250.221 53.3262 251.196 53.1902L251.213 53.1878L251.23 53.1851C252.218 53.0242 253.207 52.8518 254.195 52.6679L254.211 52.6649L254.228 52.6614C255.216 52.4547 256.114 52.2342 256.92 51.9987Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M220.46 21.6364V20.1364H218.96H210.608V9.09094V7.59094H209.108H194.585H193.085V9.09094V20.1364H187.426H185.926V21.6364V32.5455V34.0455H187.426H193.085V59.8133C193.062 63.4539 193.822 66.6005 195.473 69.1553C197.104 71.6773 199.386 73.5291 202.268 74.7067L202.272 74.7084C205.145 75.8725 208.432 76.3573 212.095 76.2149C214.04 76.1445 215.744 75.9445 217.186 75.5975C218.514 75.2998 219.579 75.0288 220.362 74.784L221.665 74.3771L221.382 73.0421L219.098 62.2353L218.795 60.801L217.354 61.0712C216.986 61.1402 216.465 61.2422 215.793 61.3765C215.199 61.4742 214.607 61.5228 214.017 61.5228C213.193 61.5228 212.525 61.3987 211.984 61.1871C211.597 61.0285 211.286 60.7624 211.034 60.3189C210.797 59.8789 210.608 59.1208 210.608 57.9091V34.0455H218.96H220.46V32.5455V21.6364Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M151.256 38.3373V4.18188V2.68188H149.756H135.233H133.733V4.18188V74.0001V75.5001H135.233H149.756H151.256V74.0001V57.9388L153.538 55.333L166.717 74.8398L167.163 75.5001H167.96H184.972H187.823L186.208 73.1502L166.451 44.4188L185.122 22.612L187.242 20.1364H183.983H167.313H166.616L166.166 20.669L151.256 38.3373Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M107.594 51.7045V51.7118L107.594 51.7191C107.615 53.855 107.189 55.5318 106.41 56.8305L106.406 56.8373L106.402 56.8442C105.601 58.2109 104.572 59.2115 103.312 59.8904C102.01 60.569 100.615 60.9091 99.1051 60.9091C96.7155 60.9091 94.9473 60.1463 93.6342 58.7055C92.3101 57.2527 91.5586 55.203 91.5369 52.3807V21.6364V20.1364H90.0369H75.5142H74.0142V21.6364L74.0142 54.9773L74.0142 54.9856C74.0379 59.2524 74.8207 63.0031 76.4247 66.1863L76.4246 66.1863L76.4288 66.1946C78.0485 69.3603 80.317 71.8382 83.2327 73.5827C86.1536 75.3302 89.5062 76.1818 93.2415 76.1818C97.4155 76.1818 101.053 75.1897 104.074 73.1266C105.683 72.0357 107.051 70.7502 108.173 69.2746V74V75.5H109.673H123.616H125.116V74V21.6364V20.1364H123.616H109.094H107.594V21.6364V51.7045Z" stroke="#FEFBFB" stroke-width="3"/>
<path className="stroke-linecap-round fill-none" d="M5.97726 2.68188H3.40869L4.67085 4.91896L29.9432 49.7122V74.0001V75.5001H31.4432H46.1023H47.6023V74.0001V49.7122L72.8746 4.91896L74.1367 2.68188H71.5682H55.0341H54.131L53.7084 3.47998L38.7727 31.6883L23.837 3.47998L23.4144 2.68188H22.5114H5.97726Z" stroke="#FEFBFB" stroke-width="3"/>
</svg>
      </div>
    </div>
  );
};

export default Preloader;