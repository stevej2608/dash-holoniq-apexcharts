import os
from dash_holoniq_apexcharts import DashApexcharts
import dash
from dash import  html

app = dash.Dash(__name__)


app.layout = html.Div([
    DashApexcharts(
        options = {
            'chart': {'id': 'apex-chart-example'},
            'xaxis': { 'categories': [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]}
        },

        series = [{
            'name': 'series-1',
            'data': [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],

        type = "bar",
        width=500,
        height=320
    )
])


if __name__ == '__main__':

    # When running in a Docker container the internal port
    # is mapped onto a host port. Use the env variables passed
    # in to the container to determine the host URL.

    port = int(os.environ.get("PORT", 5000))
    hostname = os.environ.get("HOSTNAME", "localhost")
    hostport = os.environ.get("HOSTPORT", "5000")

    print(f' * Visit http://{hostname}:{hostport}')

    app.run_server(debug=False, host="0.0.0.0", port=5000, dev_tools_serve_dev_bundles=True)
