class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
            "https://api.github.com/users/JohanOgren/projects")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h3> Laddar..</h3> </div>;

        return (
            <div className="App">
                <h3> GitHub projekt information</h3>  {
                    items.map((item) => (
                        <ul key={item.id} >
                            <p>
                                ProjektNamn: {item.name}<br></br>
                                Beskrivning: {item.body}
                            </p>
                        </ul>
                    ))
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"))