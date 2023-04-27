import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	function maxTemperature() {
		let temperature = props.data.temp.max;
		let fahrenheit = Math.round((temperature * 9) / 5 + 32);
		return `${fahrenheit}°`;
	}

	function minTemperature() {
		let temperature = props.data.temp.min;
		let fahrenheit = Math.round((temperature * 9) / 5 + 32);
		return `${fahrenheit}°`;
	}

	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();

		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	return (
		<div>
			<div className="WeatherForecast-day">{day()}</div>
			<WeatherIcon code={props.data.weather[0].icon} size={36} />
			<div className="WeatherForecast-temperatures">
				<span className="WeatherForecast-temperature-max">
					{maxTemperature()}
				</span>
				<span className="WeatherForecast-temperature-min">
					{minTemperature()}
				</span>
			</div>
		</div>
	);
}
