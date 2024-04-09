import React from "react";

// export default class EventHandler extends React.Component {
//     handleClick() {
//         alert('Button is clicked');
//     }

//     render() {
//         return (
//             <div>
//                 <p>Event handeling at class level component</p>
//                 <button onClick={this.handleClick.bind()}>Click Me</button>
//             </div>
//         );
//     }
// }

export default function EventHandlerFunction  () {
    function handleClick() {
        alert('Button is clicked');
    }

    return (
        <div>
            <p>Event handeling at functional level component</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}