//---
class GameElem {
    //---
    constructor(data) {
        //---
        this.initData = data
        //---
        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
    }
    //---
    reset(game) {
        //---
        this.unlocked = this.initData.reqs ? false : true
    }
    //---
    load(data) {
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        return savedData
    }
}
//---
class GameItem extends GameElem {
    //---
    constructor(data) {
        super(data)
    }
    //---
    reset(game) {
        super.reset(game)
        //---
        this.count = this.initData.count ? this.initData.count : 0
        this.storageCount = 0
    }
    //---
    load(data) {
        super.load(data)
        //---
        if (data.count != null) this.count = data.count
        if (data.storageCount != null) this.storageCount = data.storageCount
    }
    //---
    getSaveData() {
        let savedData = super.getSaveData()
        //---
        savedData.count = this.count
        savedData.storageCount = this.storageCount
        //---
        return savedData
    }
}
//---
class GameStorer extends GameItem {
    //---
    constructor(data) {
        super(data)
    }
}
//---
class GameMachine extends GameItem {
    //---
    constructor(data) {
        super(data)
    }
}
//---
class GameMission extends GameItem {
    //---
    constructor(data) {
        super(data)
    }
}
//---
class GameTech extends GameItem {
    //---
    constructor(data) {
        super(data)
    }
}
//---
class GameManual extends GameElem {
    //---
    constructor(data) {
        super(data)
    }
    //---
    reset(game) {
        //---
        super.reset(game)
        //---
        let recipe = game.scenario.data.elems.find(elem => elem.id == this.recipeId)
        if (recipe.inputs) {
            //---
            if (!this.inputs) this.inputs = []
            recipe.inputs.forEach(input => this.inputs.push({ id:input.id, count: input.count }))
        }
        //---
        this.outputs = []
        recipe.outputs.forEach(output => this.outputs.push({ id:output.id, count: output.count }))
        //---
        this.time = recipe.time / 0.25
        this.remainingSeconds = recipe.time / 0.25
    }
    //---
    getProgress() {
        //---
        let ret = 100 * (this.time - this.remainingSeconds) / this.time
        //---
        return ret
    }
}
//---
class GameRecipe extends GameElem {
    //---
    constructor(data) {
        super(data)
    }
}
//---
class GameLine extends GameItem {
    //---
    constructor(data) {
        super(data)
    }
    //---
    reset(game) {
        super.reset(game)
        //---
        let machine =  game.scenario.data.elems.find(elem => elem.id == this.machineId)
        if (machine.energy) {
            //---
            this.inputs = []
            this.inputs.push({ id:machine.energy.id, count:machine.energy.count })
        }
        //---
        let recipe =  game.scenario.data.elems.find(elem => elem.id == this.recipeId)
        if (recipe.inputs) {
            //---
            if (!this.inputs) this.inputs = []
            recipe.inputs.forEach(input => this.inputs.push({ id:input.id, count: (input.count / recipe.time * machine.speed).toFixed(2) }))
        }
        //---
        this.outputs = []
        recipe.outputs.forEach(output => this.outputs.push({ id:output.id, count: (output.count / recipe.time * machine.speed).toFixed(2) }))
    }
}
//---
class GameScenario {
    //---
    constructor(data) {
        //---
        this.initData = data
        //---
        let names = Object.getOwnPropertyNames(data) 
        names.forEach(name => { Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(data, name)) })
        //---
        this.startDate = null
        this.victoryDate = null
    }
    //---
    load(data) {
        //---
        if (data.startDate != null) this.startDate = data.startDate
        if (data.victoryDate != null) this.victoryDate = data.victoryDate
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.startDate = this.startDate
        savedData.victoryDate = this.victoryDate
        //---
        return savedData
    }
}
//---
class Game {
    //---
    constructor() {
        //---
        this.elems = []
        this.lines = []
        //---
        this.scenario = null
        this.scenarii = []
        //---
        this.victory = false
        this.victoryReqs = null
        //---
        this.currentManualId = null
        //---
        DATA.scenarii.forEach(scenario => {
            //---
            let newScenario = new GameScenario(scenario)
            this.scenarii.push(newScenario)
        })
    }
    //---
    loadScenario(scenarioId) {
        //---
        this.scenario = this.scenarii.find(scenario => scenario.id == scenarioId)
        //---
        this.elems = []
        this.lines = []
        //---
        this.victory = false
        this.victoryReqs = null
        //---
        this.currentManualId = null
        //---
        this.victoryReqs = this.scenario.data.victoryReqs ? this.scenario.data.victoryReqs : null
        //---
        this.scenario.data.elems.forEach(elem => {
            //---
            let el = null
            if (elem.type == 'item') el = new GameItem(elem)
            else if (elem.type == 'storer') el = new GameStorer(elem)
            else if (elem.type == 'mission') el = new GameMission(elem)
            else if (elem.type == 'tech') el = new GameTech(elem)
            else if (elem.type == 'machine') el = new GameMachine(elem)
            else if (elem.type == 'manual') el = new GameManual(elem)
            else if (elem.type == 'recipe') el = new GameRecipe(elem)
            else if (elem.type == 'line') el = new GameLine(elem)
            //---
            if (el) {
                //---
                this.elems.push(el)
                el.reset(this)
            }
        })
    }
    //---
    getElem(elemId) { return this.elems.find(elem => elem.id == elemId) }
    //---
    getElemsBy(name, value) { return this.elems.filter(elem => elem[name] == value) }
    //---
    reset() {
        //---
        this.lines = []
        this.victory = false
        //---
        this.currentManualId = null
        //---
        this.elems.forEach(elem => elem.reset())
    }
    //---
    refreshUnlocked() {
        //---
        this.elems.forEach(elem => {
            //---
            if (elem.reqs) elem.unlocked = this.checkElems(elem.reqs)
        })
    }
    //---
    load(data) {
        //---
        if (data.scenarioId) this.loadScenario(data.scenarioId)
        //---
        if (data.victory) this.victory = data.victory
        //---
        if (data.elems) this.elems.forEach(elem => { if (data.elems[elem.id]) elem.load(data.elems[elem.id]) })
        //---
        if (data.currentManualId) this.currentManualId = data.currentManualId
        //---
        if (data.scenarii) this.scenarii.forEach(scenario => { if (data.scenarii[scenario.id]) scenario.load(data.scenarii[scenario.id]) })
        //---
        this.refreshUnlocked()
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.scenarioId = this.scenario.id
        //---
        savedData.victory = this.victory
        //---
        savedData.elems = {}
        this.elems.forEach(elem => savedData.elems[elem.id] = elem.getSaveData())
        //---
        savedData.currentManualId = this.currentManualId
        //---
        savedData.scenarii = {}
        this.scenarii.forEach(scenario => savedData.scenarii[scenario.id] = scenario.getSaveData())
        //---
        return savedData
    }
    //---
    isVictoryReached() {
        //---
        if (this.victory) return false
        else if (this.victoryReqs) return this.checkElems(this.victoryReqs)
        else return false
    }
    //---
    doTick(stepMs) {
        //---
        let seconds = stepMs / 1000
        //---
        if (this.currentManualId) {
            //---
            let manual = this.elems.find(elem => elem.id == this.currentManualId)
            manual.remainingSeconds -= seconds
            if (manual.remainingSeconds <= 0) {
                //---
                this.currentManualId = null
                //---
                manual.remainingSeconds = manual.time
                //---
                manual.outputs.forEach(output => {
                    //---
                    let elem = this.getElem(output.id)
                    elem.count += output.count
                    //---
                    let max = this.getMax(output.id)
                    if (max > 0 && elem.count > max) elem.count = max
                })
            }
        }
        //---
        let elems = this.elems.filter(elem => (elem.type == 'item' || elem.type == 'machine' || elem.type == 'storer') && elem.unlocked == true)
        //---
        let prod = {}
        elems.forEach(elem => prod[elem.id] = 0)
        //---
        let lines = this.elems.filter(elem => elem.type == 'line' && elem.unlocked == true && elem.count > 0)
        lines.forEach(line => {
            //---
            if (line.inputs) {
                //---
                let canProduce = true
                line.inputs.forEach(input => {
                    let elem = this.getElem(input.id)
                    if ((input.count * seconds * line.count) > elem.count) canProduce = false
                })
                //---
                if (!canProduce) return
                //---
                line.inputs.forEach(input => {
                    prod[input.id] -= input.count * seconds * line.count
                })
            }
            //---
            line.outputs.forEach(output => {
                prod[output.id] += output.count * seconds * line.count
            })
        })
        //---
        elems.forEach(el => {
            if (prod[el.id] != 0) {
                //---
                let elem = this.getElem(el.id)
                elem.count += prod[el.id]
                //---
                let max = this.getMax(el.id)
                if (max > 0 && elem.count > max) elem.count = max
                //---
                if (elem.count < 0) elem.count = 0
            }
        })
    }
    //---
    checkElems(elems) {
        //---
        for (let el of elems) {
            let elem = this.getElem(el.id)
            if (elem.count < el.count) return false
        }
        //---
        return true
    }
    //---
    getAvailableCount(elemId) {
        //---
        let elem = this.getElem(elemId)
        if (elem.type == 'machine') {
            //---
            let lines = this.elems.filter(elem => elem.type == 'line' && elem.unlocked == true && elem.count > 0 && elem.machineId == elemId)
            //---
            let usedCount = 0
            lines.forEach(line => { usedCount += line.count })
            //---
            return elem.count - usedCount
        }
        else if (elem.type == 'storer') {
            //---
            let usedCount = 0
            //---
            let items = this.elems.filter(el => el.storage && el.storage.storerId == elemId)
            items.forEach(item => { usedCount += item.storageCount })
            //---
            return elem.count - usedCount
        }
        else {
            //---
            return elem.count
        }
        //---
        return 0
    }
    //---
    getProd(elemId) {
        //---
        let prod = 0
        //---
        let lines = this.elems.filter(elem => elem.type == 'line' && elem.unlocked == true && elem.count > 0)
        lines.forEach(line => {
            //---
            if (line.inputs && line.inputs.length > 0) {
                //---
                line.inputs.forEach(input => {
                    //---
                    if (input.id == elemId) prod -= input.count * line.count
                })
            }
            //---
            line.outputs.forEach(output => {
                //---
                if (output.id == elemId) prod += output.count * line.count
            })
        })
        //---
        return prod
    }
    //---
    getMax(elemId) {
        //---
        let max = 0
        //---
        let elem = this.getElem(elemId)
        if (elem.storage) {
            //---
            max = elem.storage.base * (1 + elem.storageCount)
        }
        //---
        return max
    }
    //---
    canStartManual(manualId) {
        //---
        if (this.currentManualId) return false
        //---
        let manual = this.elems.find(elem => elem.id == manualId)
        if (manual) {
            //---
            if (manual.inputs) {
                //---
                for (let input of manual.inputs) {
                    //---
                    if (input.count > this.getAvailableCount(input.id)) return false
                }
            }
            //---
            return true
        }
        //---
        return false
    }
    //---
    startManual(manualId) {
        //---
        if (this.canStartManual(manualId)) {
            //---
            let manual = this.elems.find(elem => elem.id == manualId)
            if (manual) {
                //---
                manual.remainingSeconds = manual.time
                //---
                if (manual.inputs) {
                    //---
                    manual.inputs.forEach(input => {
                        //---
                        let elem = this.getElem(input.id)
                        elem.count -= input.count
                    })
                }
                //---
                this.currentManualId = manualId
            }
        }
    }
    //---
    canAddLine(lineId) {
        //---
        let line = this.elems.find(elem => elem.id == lineId)
        if (line) {
            //---
            if (this.getAvailableCount(line.machineId) < 1) return false
            //---
            return true
        }
        //---
        return false
    }
    //---
    addLine(lineId) {
        //---
        if (this.canAddLine(lineId)) {
            //---
            let line = this.elems.find(elem => elem.id == lineId)
            if (line) {
                //---
                line.count += 1
            }
        }
    }
    //---
    canRemoveLine(lineId) {
        //---
        let line = this.elems.find(elem => elem.id == lineId)
        if (line) {
            //---
            if (line.count < 1) return false
            //---
            return true
        }
        //---
        return false
    }
    //---
    removeLine(lineId) {
        //---
        if (this.canRemoveLine(lineId)) {
            //---
            let line = this.elems.find(elem => elem.id == lineId)
            if (line) {
                //---
                line.count -= 1
            }
        }
    }
    //---
    canAddStorer(itemId) {
        //---
        let item = this.elems.find(elem => elem.id == itemId)
        if (item) {
            //---
            if (this.getAvailableCount(item.storage.storerId) < 1) return false
            //---
            return true
        }
        //---
        return false
    }
    //---
    addStorer(itemId) {
        //---
        if (this.canAddStorer(itemId)) {
            //---
            let item = this.elems.find(elem => elem.id == itemId)
            if (item) {
                //---
                item.storageCount += 1
            }
        }
    }
    //---
    canRemoveStorer(itemId) {
        //---
        let item = this.elems.find(elem => elem.id == itemId)
        if (item) {
            //---
            if (item.storageCount < 1) return false
            //---
            let max = this.getMax(item.id)
            if (max - item.storage.base < item.count) return false
            //---
            return true
        }
        //---
        return false
    }
    //---
    removeStorer(itemId) {
        //---
        if (this.canRemoveStorer(itemId)) {
            //---
            let item = this.elems.find(elem => elem.id == itemId)
            if (item) {
                //---
                item.storageCount -= 1
            }
        }
    }
    //---
    canCompleteMission(missionId) {
        //---
        let mission = this.elems.find(elem => elem.id == missionId)
        if (mission) {
            //---
            if (mission.count >= 1) return false
            //---
            let canComplete = true
            if (mission.costs) {
                //---
                mission.costs.forEach(cost => {
                    //---
                    let elem = this.getElem(cost.id)
                    if (cost.count > elem.count) canComplete = false
                })
            }
            //---
            return canComplete
        }
        //---
        return false
    }
    //---
    completeMission(missionId) {
        //---
        if (this.canCompleteMission(missionId)) {
            //---
            let mission = this.elems.find(elem => elem.id == missionId)
            if (mission) {
                //---
                mission.count = 1
                //---
                if (mission.costs) {
                    //---
                    mission.costs.forEach(cost => {
                        //---
                        let elem = this.getElem(cost.id)
                        elem.count -= cost.count
                    })
                }
                //---
                if (mission.rewards) {
                    //---
                    mission.rewards.forEach(reward => {
                        //---
                        let elem = this.getElem(reward.id)
                        elem.count += reward.count
                    })
                }
                //---
                this.refreshUnlocked()
            }
        }
    }
}
