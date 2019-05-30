const render = () => {
    document.getElementById('mountNode').innerHTML = `
	<div>
    yo! 
    <input/>
    <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
`;

    ReactDOM.render(
        React.createElement(
            'div',
            null,
            'Kijana fupi round',
            React.createElement('input', null),
            React.createElement('pre', null, (new Date).toLocaleTimeString())
        ),
        document.getElementById('mountNode2'),
    );
}


setInterval(render, 1000);