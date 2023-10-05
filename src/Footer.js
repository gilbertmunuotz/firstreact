import React from 'react';

// class Footer extends React.Component { //This is an Example of Container Component 

//     render() {
//         const { footer } = this.props;
//         const appList = footer.map(app => {
//             return (
//                 <div className='app' key={app.id}>
//                     <div>Name: {app.name}</div>
//                     <div>Age: {app.age}</div>
//                 </div>
//             )
//         })
//         return (
//             <div className='app-list'>
//                 {appList}
//             </div>
//         )
//     }
// }

// const Footer = function ({ footer }) {  //This Is An Example Of UI Component
//     const appList = footer.map(app => {
//         return (
//             <div className='app' key={app.id}>
//                 <div>Name: {app.name}</div>
//                 <div>Age: {app.age}</div>
//             </div>
//         )
//     })

//     return (
//         <div className='app-List'>
//             {appList}
//         </div>
//     )
// }

const Footer = ({ footer, deleteUser }) => {  //How To Condition Output 
    const appList = footer.map(app => {
        return app.age > 30 ? ( //Import The Ternary Operator
            <div className='app' key={app.id}>
                <div>Name: {app.name}</div>
                <div>Age: {app.age}</div>
                <button onClick={() => { deleteUser(app.id) }}>Delete</button>
            </div>
        ) : null;
    })

    return (
        <div className='app-List'>
            {appList}
        </div>
    )
}

export default Footer;