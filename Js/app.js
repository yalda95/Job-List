const jobList = document.querySelector('.jobs')
const jobColRight = document.querySelector('.job__column--right')
let listOfJobs = []

class Job {
    constructor(company,logo,newJob,featured,position,role,level,postedAt,contract,location,languages,tools) {
        this.company = company;
        this.logo = logo;
        this.newJob = newJob;
        this.featured = featured;
        this.position = position;
        this.role = role;
        this.level = level;
        this.postedAt = postedAt;
        this.contract = contract;
        this.location = location;
        this.languages = languages;
        this.tools = tools;
    }

}

class JobItem {
    constructor(job) {
        this.job = job
    }

    render() {
        // for(let lang of this.job.languages) {
        //     const keywords = document.createElement('div')
        //     keywords.className = 'keywords'
        //     keywords.innerHTML = `${lang}`
        //     jobColRight.append(keywords)
        // }
        const jobEl = document.createElement('div')
        jobEl.className = 'jobs__item'
        jobEl.innerHTML = `
        <div class="job__column job__column--left flex">
        <div class="job__photo flex">
          <img src="${this.job.logo}" alt="">
        </div>
        <div class="job__info"> 
          <div class="job__company">${this.job.company}</dic>
          <div class="job__title">${this.job.position}</div>
          <ul class="job__details flex">
            <li class="job__details--item"> ${this.job.postd}</li>
            <li class="job__details--item">${this.job.contract}</li>
            <li class="job__details--item">${this.job.location}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="job__column job__column--right flex">
      <div class="keywords">${this.job.role}</div>
      <div class="keywords">${this.job.level}</div>
      <div class="keywords">${this.job.languages}</div>
    </div>
       `
       
       return jobEl
    }
}

const makeJobItems = (data) => {

    for(const dataItem of data) {
        listOfJobs.push(new Job(
            dataItem.company,
            dataItem.logo,
            dataItem.new,
            dataItem.featured,
            dataItem.position,
            dataItem.role,
            dataItem.level,
            dataItem.postedAt,
            dataItem.contract,
            dataItem.location,
            dataItem.languages,
            dataItem.tools,)

        )}
}

const app = () => {
    for(const job of listOfJobs) {
        const jobItem = new JobItem(job)
        const jobEl = jobItem.render()
        jobList.append(jobEl)
        
    }
}


async function jobs() {
    try {
        let response = await fetch('./data.json')

        if(response.ok) {
            let data = response.json()
            return data
        }
    }
    catch(e) {
        console.log("something went wrong" + a)
    }
    
}



jobs().then(data => {
    makeJobItems(data)
}).then(() =>{
    app()
    })