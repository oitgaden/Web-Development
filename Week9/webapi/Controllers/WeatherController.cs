using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly string appId;
        private readonly string appKey;
        private static readonly HttpClient _httpClient = new HttpClient {
            BaseAddress = new Uri("http://api.weatherunlocked.com")
        };

        public WeatherController(IConfiguration config)
        {
            _config = config;
            appId = _config["WeatherService:AppId"];
            appKey = _config["WeatherService:AppKey"];
        }

        [HttpGet]
        [Route("temperature/current")]
        public async Task<ActionResult<CurrentTemperature>> GetCurrentTemperature()
        {
            const string location = "45.302940,-122.777992"; // Wilsonville

            try
            {
                var currentTemperature =  await getCurrentTemperature(location);

                return Ok(currentTemperature);
            }
            catch
            {
                // Log failure later

                return StatusCode(500);
            }
        }

        internal async Task<CurrentTemperature> getCurrentTemperature(string location)
        {
            var _currentTemperatureRequest = $"api/current/{location}?app_id={appId}&app_key={appKey}";
            
            HttpResponseMessage response = await _httpClient.GetAsync(_currentTemperatureRequest);

            response.EnsureSuccessStatusCode();

            var content = await response.Content.ReadAsStringAsync();
            var currentWeather = JsonSerializer.Deserialize<CurrentWeather>(content);
            
            return new CurrentTemperature
                {
                    C = currentWeather.temp_c,
                    F = currentWeather.temp_f
                };         
        }

        internal class CurrentWeather {
            public decimal temp_c {get; set;}
            public decimal temp_f {get; set;}
        }

        public class CurrentTemperature {
            public decimal F {get; set;}
            public decimal C {get; set;}
        }
    }
}
