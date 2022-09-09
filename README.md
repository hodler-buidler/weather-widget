# Weather-widget

Here, I've developed weather-widget which based on 2 APIs: IpInfo.io and OpenWeatherMap.org.
This is brief overview of my work, which was made specifically as a test-task to apply at Plumsail on Front-end Middle Developer position.

## How to use this widget at my html page?
It's as simple as including ```<script>``` tag in your HTML. All you have to do, is to build source-code to get final bundle, than you can extract it, put wherever you want and just include it with ```<script src="/path-to-bundle"></script>```

After that, you can use ```<weather-widget></weather-widget>``` at your HTML as simple tag.

## Weather-widget custom attributes

1) **theme** (string) - accepts two values: *default* and *dark*. Default theme - is light theme which is displayed as initial.
2) **lang** (string) - accepts two values currently: *en* and *ru*. This is would display widget data on your language. en - default.
3) **units** (string) - accepts three values: *standart*, *metric*, *imperial*. Responsible for how units of measurment would be displayed. Default: metric.

**NEEDS DEVELOPMENT to complete**

4) **instanceId** (string) - if you want to add multiple instances of widgets at page, you may want to set value to this attribute to make storage usage separate.

## How to set-up development?
1) ```git clone https://github.com/NikitosGolubev/weather-widget.git```
2) Install dependencies with: ```yarn```
3) Run in dev mode: ```yarn serve```

## How to build soruce-code?
Just run ```yarn build```, this command would generate final bundle and put it into */dist* repository.
