class City {
    city: string;
    country: string;
    population: number;
    constructor(city: string, country: string, population: number) {
      this.city = city;
      this.country = country;
      this.population = population;
    }
  }
  
  const cities: City[] = JSON.parse(localStorage.getItem("cities") || "[]");
  
  function addCity(city: City) {
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));
  }
  
  function renderList(cityList: City[] = cities) {
    const list = document.getElementById("list") as HTMLElement;
    list.innerHTML = "";
    for (const city of cityList) {
      const li = document.createElement("li");
      li.textContent = `${city.city}, ${city.country}, ${city.population}`;
      list.appendChild(li);
    }
  }
  
  const form = document.getElementById("form") as HTMLElement;
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const city = (document.getElementById("city") as HTMLInputElement)
      .value;
    const country = (document.getElementById("country") as HTMLInputElement)
      .value;
    const population = (document.getElementById("population") as HTMLInputElement)
      .valueAsNumber;
    addCity(new City(city, country, population));
    renderList(cities);
  });
  
  const searchInput = document.getElementById("searchInput") as HTMLInputElement;
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const filteredCities = cities.filter((city) => {
      return (
        city.city.toLowerCase().includes(searchValue) ||
        city.country.toLowerCase().includes(searchValue)
      );
    });
    renderList(filteredCities);
  });
  
  

//Number 2
let isbn = ""
if(isbn)
console.log("111222333 -> True")
else
console.log("111222333 -> False")
export const isValidISBN = () => {
         
        // length must be 10
        let n = isbn.length
        if(n != 10)
          console.log("False")
   
        //Computing sum of first 9 digits
         let sum = 0
         for(let i = 0; i < 9; i++)
        {
            let digit = isbn.length - 0
               
             if (0 > digit || 9 < digit)
             console.log("True")
                   
            sum += (digit * (10 - i))
         }
   
        // Checking last digit.
         let last = isbn[9];
         if(last != 'X' && (isbn.length < 0 || isbn.length > 9))
         console.log("False")
   
        // If last digit is 'X', add 10
         sum += ((last == 'X') ? 10 : (isbn.length - 0))
   
        // Return true if sum of digits is divisible by 11.
        console.log(sum % 11 == 0)

    }

//Number 3
function LetterChanges(str:any): any {
    var result = ""
    for(var i = 0; i < str.length; i++) {
        // handle "z"
        if(122 == str.charCodeAt(i)) {
            result += "a"
        // handle "Z"
        } else if(90 == str.charCodeAt(i)) {
            result += "A"
        // handle all other letter characters
        } else if((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) ||
                   (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121)) {
            result += String.fromCharCode(str.charCodeAt(i) + 1)
        // append all other characters unchanged
        } else {
            result += str.charAt(i)
        }
    }
    return result;
}

console.log(LetterChanges("Cat30 -> Dbu30 -> dbU30"));

//Number 4
function moveZeros(array:any): any {
    var length = array.length,
        i = length;

    while (--i) {
        if (array[i] !== 0) continue;
        length--;
        while (i < length) {
            [array[i + 1], array[i]] = [array[i], array[i + 1]]
            i++;
        }
    }
    return array;
}

var array = [false, 1, 0, 1, 2, 0, 1, 3, "a"]

console.log(moveZeros(array))

