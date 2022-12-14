type Core = {
  reuse_count: number
  status: string
}

type Cores<Core> = {
  flight: number
  core: Core
}

type FirstStage<Cores> = {
  cores: Cores[]
}

type Payload = {
  payload_type: string
  payload_mass_kg: number,
  payload_mass_lbs: number
}
type SecondStage<Payload> = {
  payloads: Payload[]
}

type Rocket<FirstStage, SecondStage> = {
  rocket_name: string
  first_stage: FirstStage
  second_stage: SecondStage
}

type Links = {
  article_link: null | string
  video_link: string
}

interface Itask1<Links, Rocket> {
  mission_name: string
  launch_date_local: string
  launch_site: { site_name_long: string }
  links: Links
  rocket: Rocket
}

const task1: Itask1<Links, Rocket<FirstStage<Cores<Core>>, SecondStage<Payload>>> = {
  "mission_name": "Starlink-15 (v1.0)",
  "launch_date_local": "2020-10-24T11:31:00-04:00",
  "launch_site": {
    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
  },
  "links": {
    "article_link": null,
    "video_link": "https://youtu/J442-ti-Dhg"
  },
  "rocket": {
    "rocket_name": "Falcon 9",
    "first_stage": {
      "cores": [
        {
          "flight": 7,
          "core": {
            "reuse_count": 6,
            "status": "unknown"
          }
        }
      ]
    },
    "second_stage": {
      "payloads": [
        {
          "payload_type": "Satellite",
          "payload_mass_kg": 15400,
          "payload_mass_lbs": 33951.2
        }
      ]
    }
  }
}
console.log(typeof task1.links)


interface IUser {
  name: string,
  age: number,
  gender: string
}

const user: IUser = {
  name: "Max",
  age: 18,
  gender: 'male'
}

function sum(a: number, b: number): number {
  return a + b
}

function showSum(a: number, b: number): void {
  console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
  someUser.age += inc
  return someUser
}


console.log(sum(1, 2));

showSum(2, 3)
incAge(user, 2)