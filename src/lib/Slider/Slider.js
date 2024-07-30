// // import React from "react";
// // import "./Slider.css";

// // function Slider({ images, reverse, width, height }) {
// //   return (
// //     <div
// //       className={`slider ${reverse ? "reverse" : ""}`}
// //       style={{
// //         "--width": `${width}px`,
// //         "--height": `${height}px`,
// //         "--quantity": images.length,
// //       }}
// //     >
// //       <div className="list">
// //         {images.map((image, index) => (
// //           <div className="item" style={{ "--position": index + 1 }} key={index}>
// //             <img src={image} alt={`slider-item-${index}`} />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Slider;
// import React from "react";
// import "./Slider.css";

// function Slider({ images, reverse, width, height }) {
//   return (
//     <div
//       className={`slider ${reverse ? "reverse" : ""}`}
//       style={{
//         "--width": `${width}px`,
//         "--height": `${height}px`,
//         "--quantity": images.length,
//       }}
//     >
//       <div className="list">
//         {images.map((image, index) => (
//           <div className="item" style={{ "--position": index + 1 }} key={index}>
//             <img src={image} alt={`slider-item-${index}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;
///////
///////
///////
///////
// with svg
// import React from "react";
// import "./Slider.css";

// function Slider({ items, reverse, width, height }) {
//   return (
//     <div
//       className={`slider ${reverse ? "reverse" : ""}`}
//       style={{
//         "--width": `${width}px`,
//         "--height": `${height}px`,
//         "--quantity": items.length,
//       }}
//     >
//       <div className="list">
//         {items.map((item, index) => (
//           <div className="item" style={{ "--position": index + 1 }} key={index}>
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;
//////////////
//////////////
//////////////
//////////////
//////////////
// svg with background
import React from "react";
import "./Slider.css";

function Slider({ items, reverse, width, height }) {
  return (
    <div
      className={`slider ${reverse ? "reverse" : ""}`}
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--quantity": items.length,
      }}
    >
      <div className="list">
        {items.map((item, index) => (
          <div
            className={`item ${item.bgColor} p-4 rounded-full`}
            style={{ "--position": index + 1 }}
            key={index}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Slider;
