# Creating a Horizontal Bar Chart

```python
import matplotlib as mlp
mpl.use("Agg")
from matplotlib.figure import Figure
```

_Matplotlib_ : is a comprehensive library for creating static, animated, and interactive visualizations in Python.
_mpl.use("Agg")_ : This is the default backend of the Matplotlib library which renders the plots. This is done to set the backend explicitly as on some python interpreter code runs as a script natively.
_Matplotlib.figure_ : is imported instead of pyplot because when using Matplotlib in a web server pyplot tends to memory leak if the data is large thus using "figure" will create a buffer memory for every time we need to plot.

```python
def custom_barh_plot(records, label_field, value_field):
    lables = [x[label_field] for x in records]
    values = [x[value_field] for x in records]

    fig = Figure(
        figsize=(7, 3),
        edgecolor="#ACACAC",
        linewidth=3,
        tight_layout=True,
        frameon=True,
    )

    ax = fig.gca()
    ax.get_xaxis().set_visible(False)
    ax.invert_yaxis()

    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["bottom"].set_visible(False)

    ax.barh(lables, values, color="#4673C4", height=0.6)

    for y_tick in ax.get_yticklabels():
        y_tick.set_fontfamily("Segoe UI")
        y_tick.set_fontsize(12)

    for i, v in enumerate(values):
        ax.text(v, i, " " + str(v), va="center")

    return fig
```

In the function **custom_barh_plot** there are three parameters -:

1. records - refers to the whole data dictionary.
2. label_feild - refers to the name key in the dictionary.
3. value_feild - refers to the value key in the dictionary.

```python
labels = [x[label_field] for x in records]
values = [x[value_field] for x in records]
```

In these two lines we have created a list of labels in which there are all the values in the label_feild key and in the values in which there are all the values of the value_feild.

```python
    fig = Figure(
        figsize=(7, 3),
        edgecolor="#ACACAC",
        linewidth=3,
        tight_layout=True,
        frameon=True,
    )
```

_figsize=(7, 3)_ : This would create an inch-by-inch image, in this it would be (7x3) in inches that would be (560, 240) pixels.
_edgecolor_ : Is used to set the figure patch edge color here it is set to "#ACACAC" i.e RGB(172, 172, 172).
_linewidth_ : This is used to set the line width of the figure patch i.e line width of the frame.
_tight_layout_ : Automatically adjust subplot parameters to give specified padding.
_frameon_ : by default it is True and used for drawing the figure background patch.

```python
ax = fig.gca()
ax.get_xaxis().set_visible(False)
ax.invert_yaxis()
```

_fig.gca()_ : Where GCA stands for Get Current Axis which is used to set different properties on your axis and is used to get the know the currently selected axes from the available axes.
_ax.get_xaxis().set_visible(False)_ : Returns the X-Axis instance and has the visibility of the axis to be False.
_ax.invert_yaxis()_ : This would start the Y-Axis value from max value to the min value.

```python
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)
ax.spines["bottom"].set_visible(False)
```

_ax.spines['#str']_ : Refers to the lines connecting the axis tick marks and noting the boundaries of the data area. They can be either "top", "bottom", "right", "left" depending upon your choice here we have only included the left axis and the rest of the axis are made invisible i.e the boundary of the graph.

```python
ax.barh(labels, values, color="#4673C4", height=0.6)
```

_ax.barh()_ : Plots the horizontal graph with labels that we created in the above list from the label_feild will work as the Y-Axis and the values here are from the list that we created from the value_feild that will work as our X-Axis with the color "#4673C4" i.e RGB(70, 115, 196) which will the color of our bars and height refers to it's a percentage of the height allotted to the bar in the figure.

```python
for y_tick in ax.get_yticklabels():
    y_tick.set_fontfamily("Segoe UI")
    y_tick.set_fontsize(12)
```

Get's the Y-tick labels ( tick values are the locations along the y-axis where the tick marks appear) as a list of Text instances with the font style of 'Segoe UI' and the font size being 12.

```python
for i, v in enumerate(values):
    ax.text(v, i, " " + str(v), va="center")
```

It displays the value of the bar on each bar keeping the align center.

```python
return fig
```

At last you can return the figure.

**_Calling the Function_**

```python
custom_barh_plot(data, "name", "value")
```

**_Sample data for Testing_**

```python
data = [
        {'name' : 'Marketing', 'value' : 4500000},
        {'name' :'Travel','value':2700000},
        {'name' :'IT Ops','value':1700000},
        {'name' :'Transport','value':1200000},
        {'name' :'HR Services','value':900000},
        {'name' :'MRO','value':740000}
    ]
```

**_Output of the Sample Data_**
![alt text](https://github.com/anubhavsrivastava10/WORK/blob/master/Hbar_Output.png?raw=true "Hbar_Sample_Output")