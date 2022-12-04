# dash-holoniq-apexcharts

Minimal [Dash](https://dash.plot.ly/) wrapper for [react-apexcharts](https://github.com/apexcharts/react-apexcharts) library.

![](https://raw.githubusercontent.com/stevej2608/dash-holoniq-apexcharts/master/docs/img/showcase.png)

**Code Snippet**
```
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
    app.run_server(debug=False, host="0.0.0.0", port=5000)

```

## Installation

You can install *dash-holoniq-apexcharts* with `pip`:

```
pip install dash-holoniq-apexcharts
```

## Documentation

Head over to the [*README*][docs-homepage] for more details.

## Contributing

The source code for *dash-holoniq-apexcharts* is available
[on GitHub][dash-holoniq-apexcharts-repo]. If you find a bug or something is unclear, we encourage
you to raise an issue. We also welcome contributions, to contribute, fork the
repository and open a [pull request][dash-holoniq-apexcharts-pulls].


[dash-homepage]: https://dash.plot.ly/
[dash-holoniq-apexcharts-repo]: https://github.com/stevej2608/dash-holoniq-apexcharts
[docs-homepage]: https://github.com/stevej2608/dash-holoniq-apexcharts/blob/master/README.md
[dash-holoniq-apexcharts-pulls]: https://github.com/stevej2608/dash-holoniq-apexcharts/pulls
