//---
class GameScenario {
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
        //---
        super(data)
    }
    //---
    reset(game) {
        //---
        super.reset(game)
        //---
        this.count = this.initData.count ? this.initData.count : 0
        this.storageCount = 0
        //---
        this.prod = 0
        //---
        this.rawProd = 0
        this.rawConsum = 0
        //---
        this.consumers = []
        //---
        this.collapsed = true
        //---
        this.selectStorageCount = '1'
    }
    //---
    load(data) {
        //---
        super.load(data)
        //---
        if (data.count != null) this.count = data.count
        if (data.storageCount != null) this.storageCount = data.storageCount
        //---
        if (data.collapsed != null) this.collapsed = data.collapsed
        //---
        if (data.selectStorageCount != null) this.selectStorageCount = data.selectStorageCount
    }
    //---
    getSaveData() {
        //---
        let savedData = super.getSaveData()
        //---
        savedData.count = this.count
        savedData.storageCount = this.storageCount
        //---
        savedData.collapsed = this.collapsed
        //---
        savedData.selectStorageCount = this.selectStorageCount
        //---
        return savedData
    }
    //---
    getAddStorageCount(game) {
        //---
        if (this.selectStorageCount == '1') return 1
        else if (this.selectStorageCount == '10') return 10
        else if (this.selectStorageCount == '100') return 100
        else if (this.selectStorageCount == 'max') return game.getAvailableCount(this.storage.storerId)
    }
    //---
    getRemoveStorageCount() {
        //---
        if (this.selectStorageCount == '1') return 1
        else if (this.selectStorageCount == '10') return 10
        else if (this.selectStorageCount == '100') return 100
        else if (this.selectStorageCount == 'max') return this.storageCount
    }
}
//---
class GameLine extends GameElem {
    //---
    constructor(data) {
        //---
        super(data)
    }
    //---
    reset(game) {
        //---
        super.reset(game)
        //---
        this.count = this.initData.count ? this.initData.count : 0
        //---
        this.selectCount = '1'
        //---
        let machine = game.scenario.data.elems.find(elem => elem.id == this.machineId)
        if (machine.energy && this.id != 'manualCoal' && this.id != 'lineCoal1') {
            //---
            this.inputs = []
            this.inputs.push({ id:machine.energy.id, count:machine.energy.count, coeff:1.0 })
        }
        //---
        let recipe =  game.scenario.data.elems.find(elem => elem.id == this.recipeId)
        if (recipe.inputs) {
            //---
            if (!this.inputs) this.inputs = []
            recipe.inputs.forEach(input => {
                //---
                this.inputs.push({ id:input.id, count:(input.count / recipe.time * machine.speed).toFixed(2), coeff:1.0 })
            })
        }
        //---
        this.output = {}
        this.output.id = recipe.output.id
        this.output.count = (recipe.output.count / recipe.time * machine.speed).toFixed(2)
        //---
        this.img = game.getElem(recipe.output.id).img
    }
    //---
    load(data) {
        //---
        super.load(data)
        //---
        if (data.count != null) this.count = data.count
        //---
        if (data.selectCount != null) this.selectCount = data.selectCount
    }
    //---
    getSaveData() {
        //---
        let savedData = super.getSaveData()
        //---
        savedData.count = this.count
        //---
        savedData.selectCount = this.selectCount
        //---
        return savedData
    }
    //---
    getAddCount(game) {
        //---
        if (this.selectCount == '1') return 1
        else if (this.selectCount == '10') return 10
        else if (this.selectCount == '100') return 100
        else if (this.selectCount == 'max') return game.getAvailableCount(this.machineId)
    }
    //---
    getRemoveCount() {
        //---
        if (this.selectCount == '1') return 1
        else if (this.selectCount == '10') return 10
        else if (this.selectCount == '100') return 100
        else if (this.selectCount == 'max') return this.count
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
        //---
        this.currentManualId = null
        //---
        this.victory = false
        this.victoryReqs = null
        //---
        this.scenarii = []
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
        this.currentManualId = null
        //---
        this.victory = false
        this.victoryReqs = null
        //---
        this.victoryReqs = this.scenario.data.victoryReqs ? this.scenario.data.victoryReqs : null
        //---
        this.scenario.data.elems.forEach(elem => {
            //---
            let el = null
            if (elem.type == 'item') el = new GameItem(elem)
            else if (elem.type == 'storer') el = new GameItem(elem)
            else if (elem.type == 'mission') el = new GameItem(elem)
            else if (elem.type == 'tech') el = new GameItem(elem)
            else if (elem.type == 'machine') el = new GameItem(elem)
            else if (elem.type == 'manual') el = new GameLine(elem)
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
    getElem(elemId) { return this.elems.find(elem => elem.id == elemId) }
    //---
    getElemsBy(name, value) { return this.elems.filter(elem => elem[name] == value) }
    //---
    refreshUnlocked() {
        //---
        this.elems.forEach(elem => {
            //---
            if (elem.reqs) elem.unlocked = this.checkElems(elem.reqs)
        })
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
        let elems = this.elems.filter(elem => elem.id != 'machineManual' && elem.unlocked == true && (elem.type == 'item' || elem.type == 'machine' || elem.type == 'storer'))
        elems.forEach(elem => {
            //---
            elem.prod = 0
            //---
            elem.rawProd = 0
            elem.rawConsum = 0
            //---
            elem.consumers = []
        })
        //---
        let lines = this.elems.filter(elem => (elem.type == 'line' || elem.type == 'manual') && elem.unlocked == true && elem.count > 0)
        lines.forEach(line => {
            //---
            let outputElem = this.elems.find(elem => elem.id == line.output.id)
            if (this.canProduce(line.id)) {
                //---
                if (line.inputs && line.inputs.length > 0) {
                    //---
                    line.inputs.forEach(input => {
                        //---
                        let inputElem = this.elems.find(elem => elem.id == input.id)
                        inputElem.prod -= input.count * line.count
                        inputElem.rawConsum += input.count * line.count
                        //---
                        if (!inputElem.consumers.includes(line.img)) inputElem.consumers.push(line.img)
                    })
                }
                //---
                outputElem.prod += line.output.count * line.count
                outputElem.rawProd += line.output.count * line.count
            }
        })
        //---
        elems.forEach(elem => {
            //---
            let prod = elem.prod * seconds
            let newCount = elem.count + prod
            //---
            if (newCount != elem.count) elem.count = newCount
        })
        //---
        elems.forEach(elem => {
            //---
            let max = this.getMax(elem.id)
            if (max > 0 && elem.count > max) elem.count = max
            //---
            if (elem.count < 0) elem.count = 0
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
    getUsedCount(elemId) {
        //---
        let usedCount = 0
        //---
        let elem = this.getElem(elemId)
        if (elem.type == 'machine') {
            //---
            let lines = this.elems.filter(elem => elem.type == 'line' && elem.unlocked == true && elem.count > 0 && elem.machineId == elemId)
            lines.forEach(line => { usedCount += line.count })
            //---
            if (usedCount > elem.count) elem.count = usedCount
        }
        else if (elem.type == 'storer') {
            //---
            let items = this.elems.filter(el => el.storage && el.storage.storerId == elemId)
            items.forEach(item => { usedCount += item.storageCount })
            //---
            if (usedCount > elem.count) elem.count = usedCount
        }
        //---
        return usedCount
    }
    //---
    getAvailableCount(elemId) {
        //---
        let usedCount = this.getUsedCount(elemId)
        //---
        let elem = this.getElem(elemId)
        return elem.count - usedCount
    }
    //---
    canProduce(elemId) {
        //---
        let line = this.elems.find(elem => elem.id == elemId && elem.unlocked)
        if (line) {
            //---
            let canProduce = true
            //---
            if (line.inputs && line.inputs.length > 0) {
                //---
                line.inputs.forEach(input => {
                    if (this.getAvailableCount(input.id) <= input.count) canProduce = false
                })
            }
            //---
            return canProduce
        }
        //---
        return false
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
    toggleCollapse(elemId) {
        //---
        let elem = this.elems.find(elem => elem.id == elemId)
        if (elem) {
            //---
            elem.collapsed = !elem.collapsed
        }
    }
    //---
    canStartManual(manualId) {
        //---
        if (this.currentManualId && this.currentManualId == manualId) return false
        //---
        let manual = this.elems.find(elem => elem.id == manualId)
        if (manual) {
            //---
            if (manual.inputs) {
                //---
                for (let input of manual.inputs) {
                    //---
                    let inputElem = this.elems.find(elem => elem.id == input.id)
                    if (input.count > inputElem.count) return false
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
                if (this.currentManualId) {
                    //---
                    let currentManualElem = this.elems.find(elem => elem.id == this.currentManualId)
                    currentManualElem.count = 0
                    this.currentManualId = null
                }
                //---
                manual.count = 1
                this.currentManualId = manualId
            }
        }
    }
    //---
    canStopManual(manualId) {
        //---
        if (this.currentManualId && this.currentManualId == manualId) return true
        //---
        return false
    }
    //---
    stopManual(manualId) {
        //---
        if (this.canStopManual(manualId)) {
            //---
            let currentManualElem = this.elems.find(elem => elem.id == this.currentManualId)
            currentManualElem.count = 0
            this.currentManualId = null
        }
    }
    //---
    canAddLine(lineId) {
        //---
        let line = this.elems.find(elem => elem.id == lineId)
        if (line) {
            //---
            let addCount = line.getAddCount(this)
            if (addCount <= 0) return false
            //---
            if (this.getAvailableCount(line.machineId) < addCount) return false
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
                let addCount = line.getAddCount(this)
                //---
                line.count += addCount
            }
        }
    }
    //---
    canRemoveLine(lineId) {
        //---
        let line = this.elems.find(elem => elem.id == lineId)
        if (line) {
            //---
            let removeCount = line.getRemoveCount()
            //---
            if (line.count < removeCount) return false
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
                let removeCount = line.getRemoveCount()
                //---
                line.count -= removeCount
            }
        }
    }
    //---
    canAddStorer(itemId) {
        //---
        let item = this.elems.find(elem => elem.id == itemId)
        if (item) {
            //---
            let addStorageCount = item.getAddStorageCount(this)
            //---
            if (this.getAvailableCount(item.storage.storerId) < addStorageCount) return false
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
                let addStorageCount = item.getAddStorageCount(this)
                //---
                item.storageCount += addStorageCount
            }
        }
    }
    //---
    canRemoveStorer(itemId) {
        //---
        let item = this.elems.find(elem => elem.id == itemId)
        if (item) {
            //---
            let removeStorageCount = item.getRemoveStorageCount()
            //---
            if (item.storageCount < removeStorageCount) return false
            //---
            let max = this.getMax(item.id)
            if (max - (item.storage.base * removeStorageCount) < item.count) return false
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
                let removeStorageCount = item.getRemoveStorageCount()
                //---
                item.storageCount -= removeStorageCount
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
    //---
    setLineSelectCount(data) {
        //---
        let line = this.elems.find(elem => elem.id == data.elemId)
        if (line) {
            //---
            line.selectCount = data.count
        }
    }
    //---
    setStorageSelectCount(data) {
        //---
        let item = this.elems.find(elem => elem.id == data.elemId)
        if (item) {
            //---
            item.selectStorageCount = data.count
        }
    }
}