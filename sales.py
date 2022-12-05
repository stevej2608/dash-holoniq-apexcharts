import os
from dash_holoniq_apexcharts import DashApexcharts
import dash
from dash import html

app = dash.Dash(__name__)


SALES_CHART = {
    "chart": {
        "fontFamily": "Inter, sans-serif",
        "foreColor": "#6B7280",
        "toolbar": {"show": False},
    },
    "fill": {
        "type": "solid",
        "opacity": 0.3,
    },
    "dataLabels": {"enabled": False},
    "tooltip": {
        "style": {
            "fontSize": "14px",
            "fontFamily": "Inter, sans-serif",
        },
    },
    "grid": {
        "show": False,
    },
    "xaxis": {
        "categories": ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
        "labels": {
            "style": {
                "colors": ["#6B7280"],
                "fontSize": "14px",
                "fontWeight": 500,
            },
        },
        "axisBorder": {
            "color": "#F3F4F6",
        },
        "axisTicks": {
            "color": "#F3F4F6",
        },
    },
    "yaxis": {
        "labels": {
            "style": {
                "colors": ["#6B7280"],
                "fontSize": "14px",
                "fontWeight": 500,
            },
            # 'formatter': function (value) {
            # 	return '$' + value;
            # }
        },
    },
    "responsive": [{"breakpoint": 1024, "options": {"xaxis": {"labels": {"show": False}}}}],
}


def sales_chart():
    series = {"name": "Revenue", "data": [6356, 6218, 6156, 6526, 6356, 6256, 6056], "color": "#0694a2"}
    chart = DashApexcharts(options=SALES_CHART, series=[series], type='area', width=420)

    return chart


app.layout = html.Div([sales_chart()])


if __name__ == "__main__":

    # When running in a Docker container the internal port
    # is mapped onto a host port. Use the env variables passed
    # in to the container to determine the host URL.

    port = int(os.environ.get("PORT", 5000))
    hostname = os.environ.get("HOSTNAME", "localhost")
    hostport = os.environ.get("HOSTPORT", "5000")

    print(f" * Visit http://{hostname}:{hostport}")

    app.run_server(debug=False, host="0.0.0.0", port=5000, dev_tools_serve_dev_bundles=True)
