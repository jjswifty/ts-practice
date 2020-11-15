interface Animal {
    moving : string,
    speech ?: boolean,
    sex : string,
    about : () => string,
}

class Cat implements Animal {
    moving : string = 'ground'
    speech : boolean
    sex : string

    constructor(sex: string, speech: boolean) {
        this.speech = speech
        this.sex = sex
    }

    about = () : string => (
        `This animal ${this.speech ? 'can speak' : 'can\'t speak'}, moving on ${this.moving} and it's ${this.sex}`
    )
}

class Bird implements Animal {
	moving : string = 'sky'
	speech : boolean
	sex : string 

	constructor(sex: string, speech: boolean) {
		this.sex = sex
		this.speech = speech
	}

	about = () : string => (
		`This animal ${this.speech ? 'can speak' : 'can\'t speak'}, moving on ${this.moving} and it's ${this.sex}`
	)
}


const Vasya = new Cat('female', true)
const Kesha = new Bird('male', true)

console.log(Vasya.about(), Kesha.about())