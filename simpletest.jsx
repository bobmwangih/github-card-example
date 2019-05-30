const magari = ['maserati', 'ferrari', 'bugatti', 'audi'];

function magariZote(arr) {
    let format = "x---->x------>x---------->x";
    for (let car of arr) {
        format = format.replace('x', car);
    }

    return format;
}

const element = (<
    div className="budaa" >
    <
    h6 >
        These are the list of cars: {magariZote(magari)} <
    /h6>
    
    <
    /div>
    );
    
    //the alternative creation of react elements
    
    
    // const element= React.createElement(
    //   'div',
//   {className: budaa},
        //   'h6',
//   `These are the list of cars: {magariZote(magari)}`,
        // );
        
        ReactDOM.render(
            element,
            mountNode
)