var data = [
  {id: 0, title: 'IP Address', output: 123},
  {id: 1, title: 'Viewport Size', output: '1024x768'},
  {id: 2, title: 'Viewport Size', output: '1024x768'}
];

var DeviceBox = React.createClass({

  render: function() {
    return (
      <div className="device-box">
        <h1>Device Info</h1>
        <DeviceList data={this.props.data} />
      </div>
    );
  }

});

var DeviceList = React.createClass({

  render: function() {

    var deviceNodes = this.props.data.map(function(info) {
      return (
        <Info key={info.id} title={info.title} output={info.output}>
        </Info>
      );
    });

    return (
      <div className="device-list">
        {deviceNodes}
      </div>
    );

  }

});

var Info = React.createClass({
  render: function() {
    return (
      <div className="device-info">
       <h2>{this.props.title}</h2>
       <p>{this.props.output}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <DeviceBox data={data} />,
  document.getElementById('content')
);
