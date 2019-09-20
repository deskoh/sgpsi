# Realtime PM 2.5 Readings

Realtime PM 2.5 readings somewhere in Singapore.

[https://deskoh.github.io/sgpsi/](https://deskoh.github.io/sgpsi/)

## Built With

### Software
* [FeathersJS](https://feathersjs.com)
* [React](https://reactjs.org)
* [PostgreSQL](https://www.postgresql.org)
* [Home Assistant](https://www.home-assistant.io)

### Hardware
* Xiaomi Smart Air Quality Monitor PM2.5 Detector
* Raspberry PI 3B

### Hosted with ❤️
* [Heroku](https://www.heroku.com)
* [GitHub Pages](https://pages.github.com)

## How it works

The [integration](https://www.home-assistant.io/components/sensor.xiaomi_miio/) of _Xiaomi Smart Air Quality Monitor_ with _Home Assistant_ enabled this [automation](https://www.home-assistant.io/docs/automation/). The data is then _POSTED_ to a protected API endpoint.

The webclient receives real-time updates of the readings in realtime via WebSockets.

See the _Home Assistant_ configuration [repository](https://github.com/deskoh/HomeAssistantConfig) for more details.

## Deployment

API and PostgreSQL are currently hosted using FREE tier on Heroku.

To deploy `api` subfolder to Heroku, use the following command

```
git subtree push --prefix api heroku master
```
