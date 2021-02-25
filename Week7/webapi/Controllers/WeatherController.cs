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
        private static string _currentTemperatureRequest;
        private static readonly HttpClient _httpClient = new HttpClient();
        private readonly IConfiguration _config;

        public WeatherController(IConfiguration config)
        {
            _config = config;

            var location = "45.302940,-122.777992"; // Wilsonville
            var appId = _config["WeatherService:AppId"];
            var appKey = _config["WeatherService:AppKey"];
            
            _currentTemperatureRequest = $"http://api.weatherunlocked.com/api/current/{location}?app_id={appId}&app_key={appKey}";
        }

        [HttpGet]
        [Route("temperature/current")]
        public async Task<ActionResult<CurrentTemperature>> GetCurrentTemperature()
        {
            try
            {
                var currentTemperature =  await getCurrentTemperature();

                return Ok(currentTemperature);
            }
            catch(ApplicationException aex)
            {
                // Log failure later

                return StatusCode(500);
            }
        }

        internal async Task<CurrentTemperature> getCurrentTemperature()
        {
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
