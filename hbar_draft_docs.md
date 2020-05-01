# Creating a Horizontal Bar Chart

```python
mpl.use("Agg")
```

_mpl.use("Agg")_ : The Anti-Grain Geometry (Agg) rendering engine, capable of rendering high-quality images. This is the canonical render for the user interface it uses its Agg C++ library to make a pixel image of the figure. Render is the the thing that actually does the drawing from the canvas (i.e the place where drawing goes). All user interface except macosx can be used with Agg rendering.

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

Get's the Y-tick labels ( tick values are the locations along the y-axis where the tick marks appear) as a list of Text instances with the font style of 'Segoe UI' and the font size being 12. These are the text to be appeared on the Y-axis.

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

##### My Code

```python
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

fig, ax = plt.subplots()

def bar_plot():
    data = request.json["data"]
    data1 = pd.DataFrame.from_records(data)
    y_pos = np.arange(len(data1['name']))
    ax.barh(y_pos, data1['value'],color=('#4673C4'))
    ax.set_yticks(y_pos)
    ax.set_yticklabels(data1['name'])
    rect_labels=[]
    for bar in data1['value']:
        rect_labels.append(bar)
        
    plt.show()
```

_plt.subplots()_ : is a function that returns a tuple containing a figure and axes object(s) thus when we use it it unpacks itself into variable fig and ax. You can use fig as if you want to save the image as an image file later and ax is used as plotting method. It is mainly used for plotting multiple graphs in a single frame.

_data = request.json["data"]_ : Requesting of data from an API in a json format in a list called data.

_data1 = pd.DataFrame.from_records(data)_ : converted that data in the dataframe.

_y_pos = np.arange(len(data1['name']))_ : Created a range of numbers from Zero to the total number of elements present in the dataframe.

_ax.barh(y_pos, data1['value'],color=('#4673C4'))_ : Created a horizontal bar graph with the specific color of the bar and y_pos represents the co-ordinated of the bar in the y axis and data1['value'] is the width of the bar.

_ax.set_yticks(y_pos)_ : Sets y-ticks with the list of ticks. This is returning a list of address.

_ax.set_yticklabels(data1['name'])_ : Alloted the names to the list of labels on the y-axis. This also returns the list of address.

```python
rect_labels=[]
for bar in data1['value']:
    rect_labels.append(bar)
```

Storing all the value in a list so that it can be used to label the bar on top of each bar.

_plt.show()_ : this will display all the figures but what it does is it diplays the address of the graph at which it is present.

#### Difference in both the codes

1. I have also used pyplot instead of figure which will show the data leak incase the data is large and the correct graph wont be shown.
1. I haven't declared any rendering process for the graph.
1. While my code has created a dataframe and the correct code has made a list of labels and values seperately.
1. I haven't declared the figure potential parameters such as edgecolor( my edge color wil be default black), figsize( so my graph will vary from different number of inputs), linewidth( which is also default and will point to 1).
1. My x-axis will also be visible as it's visibility is default that is True.
1. My y-axis is also not inverted which means that the first value will be plotted at nearest to the x-axis which was supposed to be inverted in this case.
1. I have not removed the border of the graph that is it should only have the left border but it is yet default i.e all borders are being shown.
1. Haven't assigned the font-style and the font-size of the text that is supposed to be present on the y-axis of the graph.
1. No data will be shown in my case of the graph on the top of each bar.
1. My code returns the address of the graph at which it is present rather than the graph itself.
1. I have also used plt.show() instead of returning the figure.

##### What is ```__init__.py ``` used for ?

Each path in the python directory must have a specified file called ```__init__.py ``` .This indicated that the directory it contains is a package, so it can be imported the same way a module can be imported.
1. Present in each python directory.
1. Can be empty.
1. It can be imported as the same way as module.
1. This is executed implicitly.

A python package is simply an organized collection of python module. A python module is a single python file.
