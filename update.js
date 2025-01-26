fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        document.querySelector('h3').textContent = data.dateOfReport;
        document.querySelector('.weather-description').textContent = data.Headline.Text;
        document.querySelector('.table-data').innerHTML = `
                        <tr>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Wind</th>
                </tr>
                <tr>
                    <td>
                    min: ${data.DailyForecasts[0].Temperature.Minimum.Value}
                    max: ${data.DailyForecasts[0].Temperature.Maximum.Value}
                    </td>
                    <td>
                    day: ${data.DailyForecasts[0].Day.RelativeHumidity.Average}
                    night: ${data.DailyForecasts[0].Night.RelativeHumidity.Average} 
                    </td>
                    <td>
                    day: ${data.DailyForecasts[0].Day.Wind.Speed.Value}
                    night: ${data.DailyForecasts[0].Day.Wind.Speed.Value}
                    </td>
                </tr>
        `;
    })
    .catch((error) => console.error('Something went wrong: ', error));