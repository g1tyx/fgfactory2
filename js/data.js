//---
var DATA = {
    //---
    scenarii:[
        //---
        { id:'tut', label:'scenario_tut', desc:'scenarioDesc_tut', ready:true, data:{
            //---
            victoryReqs:[{ id:'tutMission6', count:1 }],
            //---
            elems:[
                //---
                {	id:'tutMission1',	        type:'mission',     label:'tutMission1', desc:'tutMission1Desc', costs:[{ id:'itemStone', count:5 }], rewards:[{ id:'itemStone', count:5 }] },
                {	id:'tutMission2',	        type:'mission',	    reqs:[{ id:'tutMission1', count:1 }], label:'tutMission2', desc:'tutMission2Desc', costs:[{ id:'machineFurnace1', count:1 }], rewards:[{ id:'machineFurnace1', count:1 }] },
                {	id:'tutMission3',	        type:'mission',	    reqs:[{ id:'tutMission2', count:1 }], label:'tutMission3', desc:'tutMission3Desc', costs:[{ id:'itemIronPlate', count:1 }], rewards:[{ id:'itemIronPlate', count:1 }] },
                {	id:'tutMission4',	        type:'mission',	    reqs:[{ id:'tutMission3', count:1 }], label:'tutMission4', desc:'tutMission4Desc', costs:[{ id:'machineMiner1', count:1 }], rewards:[{ id:'machineMiner1', count:1 }] },
                {	id:'tutMission5',	        type:'mission',	    reqs:[{ id:'tutMission4', count:1 }], label:'tutMission5', desc:'tutMission5Desc', costs:[{ id:'storerChest', count:1 }], rewards:[{ id:'storerChest', count:1 }] },
                {	id:'tutMission6',	        type:'mission',	    reqs:[{ id:'tutMission5', count:1 }], label:'tutMission6', desc:'tutMission6Desc', costs:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }], rewards:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }] },
                //---
                {	id:'itemStone',		        type:'item',	    label:'itemStone', img:'img/items/Stone.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualStone', lines:[ 'lineStone1' ] },
                {	id:'recipeStone',	        type:'recipe',	    time:1, outputs:[{ id:'itemStone', count:1 }] },
                {	id:'manualStone',	        type:'manual',	    recipeId:'recipeStone' },
                {	id:'lineStone1',	        type:'line',	    reqs:[{ id:'tutMission4', count:1 }], machineId:'machineMiner1', recipeId:'recipeStone' },
                //---
                {	id:'itemIron',		        type:'item',	    reqs:[{ id:'tutMission2', count:1 }], label:'itemIron', img:'img/items/Iron.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualIron', lines:[ 'lineIron1' ] },
                {	id:'recipeIron',	        type:'recipe',	    reqs:[{ id:'tutMission2', count:1 }], time:1, outputs:[{ id:'itemIron', count:1 }] },
                {	id:'manualIron',	        type:'manual',	    reqs:[{ id:'tutMission2', count:1 }], recipeId:'recipeIron' },
                {	id:'lineIron1',	            type:'line',	    reqs:[{ id:'tutMission4', count:1 }], machineId:'machineMiner1', recipeId:'recipeIron' },
                //---
                {	id:'itemCoal',		        type:'item',	    reqs:[{ id:'tutMission2', count:1 }], label:'itemCoal', img:'img/items/Coal.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualCoal', lines:[ 'lineCoal1' ] },
                {	id:'recipeCoal',	        type:'recipe',	    reqs:[{ id:'tutMission2', count:1 }], time:1, outputs:[{ id:'itemCoal', count:1 }] },
                {	id:'manualCoal',	        type:'manual',      reqs:[{ id:'tutMission2', count:1 }], recipeId:'recipeCoal' },
                {	id:'lineCoal1',	            type:'line',	    reqs:[{ id:'tutMission4', count:1 }], machineId:'machineMiner1', recipeId:'recipeCoal' },
                //---
                {	id:'itemIronPlate',		    type:'item',	    reqs:[{ id:'tutMission2', count:1 }], label:'itemIronPlate', img:'img/items/IronPlate.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineIronPlate1' ] },
                {	id:'recipeIronPlate',	    type:'recipe',	    reqs:[{ id:'tutMission2', count:1 }], time:3.2, outputs:[{ id:'itemIronPlate', count:1 }], inputs:[{ id:'itemIron', count:1 }] },
                {	id:'lineIronPlate1',        type:'line',	    reqs:[{ id:'tutMission2', count:1 }], machineId:'machineFurnace1', recipeId:'recipeIronPlate' },
                //---
                {	id:'itemIronWheel',		    type:'item',	    reqs:[{ id:'tutMission3', count:1 }], label:'itemIronWheel', img:'img/items/IronWheel.png', storage:{ base:100, storerId:'storerChest' }, manualId:'manualIronWheel' },
                {	id:'recipeIronWheel',	    type:'recipe',	    reqs:[{ id:'tutMission3', count:1 }], time:1, outputs:[{ id:'itemIronWheel', count:1 }], inputs:[{ id:'itemIronPlate', count:2 }]	},
                {	id:'manualIronWheel',	    type:'manual',	    reqs:[{ id:'tutMission3', count:1 }], recipeId:'recipeIronWheel' },
                //---
                {	id:'machineFurnace1',	    type:'machine',	    reqs:[{ id:'tutMission1', count:1 }], label:'machineFurnace1', img:'img/machines/Furnace1.png', manualId:'manualFurnace1', speed:0.25, energy:{ id:'itemCoal', count:0.02 } },
                {	id:'recipeFurnace1',	    type:'recipe',	    reqs:[{ id:'tutMission1', count:1 }], time:2, outputs:[{ id:'machineFurnace1', count:1 }], inputs:[{ id:'itemStone', count:5 }] },
                {	id:'manualFurnace1',	    type:'manual',	    reqs:[{ id:'tutMission1', count:1 }], recipeId:'recipeFurnace1' },
                //---
                {	id:'machineMiner1',	        type:'machine',	    reqs:[{ id:'tutMission3', count:1 }], label:'machineMiner1', img:'img/machines/Drill1.png', manualId:'manualMiner1', speed:0.25, energy:{ id:'itemCoal', count:0.04 } },
                {	id:'recipeMiner1',	        type:'recipe',	    reqs:[{ id:'tutMission3', count:1 }], time:2, outputs:[{ id:'machineMiner1', count:1 }], inputs:[{ id:'itemIronWheel', count:3 },{ id:'itemIronPlate', count:3 },{ id:'machineFurnace1', count:1 }] },
                {	id:'manualMiner1',	        type:'manual',	    reqs:[{ id:'tutMission3', count:1 }], recipeId:'recipeMiner1' },
                //---
                {	id:'storerChest',	        type:'storer',	    reqs:[{ id:'tutMission4', count:1 }], label:'storerChest', img:'img/storers/Chest.png', manualId:'manualChest' },
                {	id:'recipeChest',	        type:'recipe',	    reqs:[{ id:'tutMission4', count:1 }], time:1, outputs:[{ id:'storerChest', count:1 }], inputs:[{ id:'itemIronPlate', count:8 }] },
                {	id:'manualChest',	        type:'manual',	    reqs:[{ id:'tutMission4', count:1 }], recipeId:'recipeChest' },
            ]
        }},
        //---
        { id:'factorio1', label:'scenario_factorio1', desc:'scenarioDesc_factorio1', ready:true, data:{
            //---
            victoryReqs:[{ id:'factorio1Obj', count:1 }],
            //---
            elems:[
                //---
                {	id:'factorio1Obj',	        type:'mission',	    label:'factorio1Obj', desc:'factorio1ObjDesc', costs:[{ id:'itemArmor', count:1 },{ id:'itemRocketPart', count:100 },{ id:'itemSatellite', count:1 }] },
                //---                
                {	id:'techAutomation1',	    type:'tech',	    label:'techAutomation1', costs:[{ id:'itemRedPack', count:10 }] },
                {	id:'techSteel',	            type:'tech',	    label:'techSteel', costs:[{ id:'itemRedPack', count:50 }] },
                {	id:'techGreen',	            type:'tech',	    label:'techGreen', costs:[{ id:'itemRedPack', count:75 }] },
                {	id:'techAutomation2',	    type:'tech',	    reqs:[{ id:'techGreen', count:1 },{ id:'techSteel', count:1 }], label:'techAutomation2', costs:[{ id:'itemRedPack', count:40 },{ id:'itemGreenPack', count:40 }] },
                {	id:'techMaterial1',	        type:'tech',	    reqs:[{ id:'techGreen', count:1 },{ id:'techSteel', count:1 }], label:'techMaterial1', costs:[{ id:'itemRedPack', count:75 },{ id:'itemGreenPack', count:75 }] },
                {	id:'techEngine1',	        type:'tech',	    reqs:[{ id:'techGreen', count:1 },{ id:'techSteel', count:1 }], label:'techEngine1', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 }] },
                {	id:'techFluid',	            type:'tech',	    reqs:[{ id:'techAutomation2', count:1 },{ id:'techEngine1', count:1 }], label:'techFluid', costs:[{ id:'itemRedPack', count:50 },{ id:'itemGreenPack', count:50 }] },
                {	id:'techOil1',	            type:'tech',	    reqs:[{ id:'techFluid', count:1 }], label:'techOil1', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 }] },
                {	id:'techSulfur',	        type:'tech',	    reqs:[{ id:'techOil1', count:1 }], label:'techSulfur', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 }] },
                {	id:'techBattery',	        type:'tech',	    reqs:[{ id:'techSulfur', count:1 }], label:'techBattery', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 }] },
                {	id:'techAccumulator',	    type:'tech',	    reqs:[{ id:'techBattery', count:1 }], label:'techAccumulator', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 }] },
                {	id:'techPlastic',	        type:'tech',	    reqs:[{ id:'techOil1', count:1 }], label:'techPlastic', costs:[{ id:'itemRedPack', count:200 },{ id:'itemGreenPack', count:200 }] },
                {	id:'techConcrete',	        type:'tech',	    reqs:[{ id:'techAutomation2', count:1 }], label:'techConcrete', costs:[{ id:'itemRedPack', count:250 },{ id:'itemGreenPack', count:250 }] },
                {	id:'techBlue',	            type:'tech',	    reqs:[{ id:'techPlastic', count:1 },{ id:'techSulfur', count:1 }], label:'techBlue', costs:[{ id:'itemRedPack', count:75 },{ id:'itemGreenPack', count:75 }] },
                {	id:'techOil2',	            type:'tech',	    reqs:[{ id:'techBlue', count:1 }], label:'techOil2', costs:[{ id:'itemRedPack', count:75 },{ id:'itemGreenPack', count:75 },{ id:'itemBluePack', count:75 }] },
                {	id:'techLubricant',	        type:'tech',	    reqs:[{ id:'techOil2', count:1 }], label:'techLubricant', costs:[{ id:'itemRedPack', count:50 },{ id:'itemGreenPack', count:50 },{ id:'itemBluePack', count:50 }] },
                {	id:'techEngine2',	        type:'tech',	    reqs:[{ id:'techLubricant', count:1 }], label:'techEngine2', costs:[{ id:'itemRedPack', count:50 },{ id:'itemGreenPack', count:50 },{ id:'itemBluePack', count:50 }] },
                {	id:'techUranium',	        type:'tech',	    reqs:[{ id:'techBlue', count:1 },{ id:'techConcrete', count:1 }], label:'techUranium', costs:[{ id:'itemRedPack', count:200 },{ id:'itemGreenPack', count:200 },{ id:'itemBluePack', count:200 }] },
                {	id:'techMaterial2',	        type:'tech',	    reqs:[{ id:'techBlue', count:1 }], label:'techMaterial2', costs:[{ id:'itemRedPack', count:250 },{ id:'itemGreenPack', count:250 },{ id:'itemBluePack', count:250 }] },
                {	id:'techElectronics3',	    type:'tech',	    reqs:[{ id:'techBlue', count:1 }], label:'techElectronics3', costs:[{ id:'itemRedPack', count:300 },{ id:'itemGreenPack', count:300 },{ id:'itemBluePack', count:300 }] },
                {	id:'techRocketFuel',	    type:'tech',	    reqs:[{ id:'techOil2', count:1 }], label:'techRocketFuel', costs:[{ id:'itemRedPack', count:300 },{ id:'itemGreenPack', count:300 },{ id:'itemBluePack', count:300 }] },
                {	id:'techNuclear',	        type:'tech',	    reqs:[{ id:'techUranium', count:1 }], label:'techNuclear', costs:[{ id:'itemRedPack', count:800 },{ id:'itemGreenPack', count:800 },{ id:'itemBluePack', count:800 }] },
                {	id:'techPurple',	        type:'tech',	    reqs:[{ id:'techMaterial2', count:1 }], label:'techPurple', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 },{ id:'itemBluePack', count:100 }] },
                {	id:'techAutomation3',	    type:'tech',	    reqs:[{ id:'techPurple', count:1 }], label:'techAutomation3', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 },{ id:'itemBluePack', count:150 },{ id:'itemPurplePack', count:150 }] },
                {	id:'techYellow',	        type:'tech',	    reqs:[{ id:'techElectronics3', count:1 }], label:'techYellow', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 },{ id:'itemBluePack', count:100 }] },
                {	id:'techArmor',	            type:'tech',	    reqs:[{ id:'techElectronics3', count:1 },{ id:'techEngine2', count:1 }], label:'techArmor', costs:[{ id:'itemRedPack', count:400 },{ id:'itemGreenPack', count:400 },{ id:'itemBluePack', count:400 },{ id:'itemPurplePack', count:400 },{ id:'itemYellowPack', count:400 }] },
                {	id:'techRocket',	        type:'tech',	    reqs:[{ id:'techConcrete', count:1 },{ id:'techRocketFuel', count:1 }], label:'techRocket', costs:[{ id:'itemRedPack', count:1e3 },{ id:'itemGreenPack', count:1e3 },{ id:'itemBluePack', count:1e3 },{ id:'itemPurplePack', count:1e3 },{ id:'itemYellowPack', count:1e3 }] },
                {	id:'techSpace',	            type:'tech',	    reqs:[{ id:'techRocket', count:1 }], label:'techSpace', costs:[{ id:'itemRedPack', count:2e3 },{ id:'itemGreenPack', count:2e3 },{ id:'itemBluePack', count:2e3 },{ id:'itemPurplePack', count:2e3 },{ id:'itemYellowPack', count:2e3 }] },
                //---
                {	id:'itemCoal',	            type:'item',	    label:'itemCoal', img:'img/items/Coal.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualCoal', lines:[ 'lineCoal1', 'lineCoal2' ] },
                {	id:'recipeCoal',	        type:'recipe',	    time:1, outputs:[{ id:'itemCoal', count:1 }] },
                {	id:'manualCoal',	        type:'manual',	    recipeId:'recipeCoal' },
                {	id:'lineCoal1',             type:'line',	    machineId:'machineMiner1', recipeId:'recipeCoal' },
                {	id:'lineCoal2',             type:'line',	    machineId:'machineMiner2', recipeId:'recipeCoal' },
                //---
                {	id:'itemStone',		        type:'item',	    label:'itemStone', img:'img/items/Stone.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualStone', lines:[ 'lineStone1', 'lineStone2' ] },
                {	id:'recipeStone',	        type:'recipe',	    time:1, outputs:[{ id:'itemStone', count:1 }] },
                {	id:'manualStone',	        type:'manual',	    recipeId:'recipeStone' },
                {	id:'lineStone1',            type:'line',	    machineId:'machineMiner1', recipeId:'recipeStone' },
                {	id:'lineStone2',            type:'line',	    machineId:'machineMiner2', recipeId:'recipeStone' },
                //---   
                {	id:'itemBrick',             type:'item',	    label:'itemBrick', img:'img/items/Brick.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineBrick1', 'lineBrick2', 'lineBrick3' ] },
                {	id:'recipeBrick',	        type:'recipe',	    time:3.2, outputs:[{ id:'itemBrick', count:1 }], inputs:[{ id:'itemStone', count:2 }] },
                {	id:'lineBrick1',            type:'line',	    machineId:'machineFurnace1', recipeId:'recipeBrick' },
                {	id:'lineBrick2',            type:'line',	    reqs:[{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeBrick' },
                {	id:'lineBrick3',            type:'line',	    reqs:[{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeBrick' },
                //---
                {	id:'itemConcrete',          type:'item',	    reqs:[{ id:'techConcrete', count:1 }], label:'itemConcrete', img:'img/items/Concrete.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineConcrete1', 'lineConcrete2' ] },
                {	id:'recipeConcrete',	    type:'recipe',	    reqs:[{ id:'techConcrete', count:1 }], time:10, outputs:[{ id:'itemConcrete', count:10 }], inputs:[{ id:'itemIron', count:1 },{ id:'itemBrick', count:5 },{ id:'itemWater', count:100 }] },
                {	id:'lineConcrete1',         type:'line',	    reqs:[{ id:'techConcrete', count:1 }], machineId:'machineAssembler2', recipeId:'recipeConcrete' },
                {	id:'lineConcrete2',         type:'line',	    reqs:[{ id:'techConcrete', count:1 }], machineId:'machineAssembler3', recipeId:'recipeConcrete' },
                //---
                {	id:'itemIron',	            type:'item',        label:'itemIron', img:'img/items/Iron.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualIron', lines:[ 'lineIron1', 'lineIron2' ] },
                {	id:'recipeIron',	        type:'recipe',	    time:1, outputs:[{ id:'itemIron', count:1 }] },
                {	id:'manualIron',	        type:'manual',	    recipeId:'recipeIron' },
                {	id:'lineIron1',             type:'line',	    machineId:'machineMiner1', recipeId:'recipeIron' },
                {	id:'lineIron2',             type:'line',	    machineId:'machineMiner2', recipeId:'recipeIron' },
                //---
                {	id:'itemIronPlate',         type:'item',	    label:'itemIronPlate', img:'img/items/IronPlate.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineIronPlate1', 'lineIronPlate2', 'lineIronPlate3' ] },
                {	id:'recipeIronPlate',	    type:'recipe',	    time:3.2, outputs:[{ id:'itemIronPlate', count:1 }], inputs:[{ id:'itemIron', count:1 }] },
                {	id:'lineIronPlate1',        type:'line',	    machineId:'machineFurnace1', recipeId:'recipeIronPlate' },
                {	id:'lineIronPlate2',        type:'line',	    reqs:[{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeIronPlate' },
                {	id:'lineIronPlate3',        type:'line',	    reqs:[{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeIronPlate' },
                //---
                {	id:'itemSteel',             type:'item',	    reqs:[{ id:'techSteel', count:1 }], label:'itemSteel', img:'img/items/Steel.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineSteel1', 'lineSteel2', 'lineSteel3' ] },
                {	id:'recipeSteel',	        type:'recipe',	    reqs:[{ id:'techSteel', count:1 }], time:16, outputs:[{ id:'itemSteel', count:1 }], inputs:[{ id:'itemIronPlate', count:5 }] },
                {	id:'lineSteel1',            type:'line',	    reqs:[{ id:'techSteel', count:1 }], machineId:'machineFurnace1', recipeId:'recipeSteel' },
                {	id:'lineSteel2',            type:'line',	    reqs:[{ id:'techSteel', count:1 },{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeSteel' },
                {	id:'lineSteel3',            type:'line',	    reqs:[{ id:'techSteel', count:1 },{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeSteel' },
                //---
                {	id:'itemEngine1',           type:'item',	    reqs:[{ id:'techEngine1', count:1 }], label:'itemEngine1', img:'img/items/Engine1.png', storage:{ base:50, storerId:'storerChest' }, lines:[ 'lineEngine11', 'lineEngine12', 'lineEngine13' ] },
                {	id:'recipeEngine1',	        type:'recipe',	    reqs:[{ id:'techEngine1', count:1 }], time:10, outputs:[{ id:'itemEngine1', count:1 }], inputs:[{ id:'itemIronPlate', count:4 },{ id:'itemSteel', count:1 }] },
                {	id:'lineEngine11',          type:'line',	    reqs:[{ id:'techEngine1', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeEngine1' },
                {	id:'lineEngine12',          type:'line',	    reqs:[{ id:'techEngine1', count:1 }], machineId:'machineAssembler2', recipeId:'recipeEngine1' },
                {	id:'lineEngine13',          type:'line',	    reqs:[{ id:'techEngine1', count:1 }], machineId:'machineAssembler3', recipeId:'recipeEngine1' },
                //---
                {	id:'itemEngine2',           type:'item',	    reqs:[{ id:'techEngine2', count:1 }], label:'itemEngine2', img:'img/items/Engine2.png', storage:{ base:50, storerId:'storerChest' }, lines:[ 'lineEngine21','lineEngine22' ] },
                {	id:'recipeEngine2',	        type:'recipe',	    reqs:[{ id:'techEngine2', count:1 }], time:10, outputs:[{ id:'itemEngine2', count:1 }], inputs:[{ id:'itemCopperPlate', count:3 },{ id:'itemEngine1', count:1 },{ id:'itemIronPlate', count:2 },{ id:'itemLubricant', count:15 }] },
                {	id:'lineEngine21',          type:'line',	    reqs:[{ id:'techEngine2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeEngine2' },
                {	id:'lineEngine22',          type:'line',	    reqs:[{ id:'techEngine2', count:1 }], machineId:'machineAssembler3', recipeId:'recipeEngine2' },
                //---
                {	id:'itemCopper',	        type:'item',	    label:'itemCopper', img:'img/items/Copper.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualCopper', lines:[ 'lineCopper1', 'lineCopper2' ] },
                {	id:'recipeCopper',	        type:'recipe',	    time:1, outputs:[{ id:'itemCopper', count:1 }] },
                {	id:'manualCopper',	        type:'manual',	    recipeId:'recipeCopper' },
                {	id:'lineCopper1',           type:'line',	    machineId:'machineMiner1', recipeId:'recipeCopper' },
                {	id:'lineCopper2',           type:'line',	    machineId:'machineMiner2', recipeId:'recipeCopper' },
                //---
                {	id:'itemCopperPlate',       type:'item',	    label:'itemCopperPlate', img:'img/items/CopperPlate.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineCopperPlate1', 'lineCopperPlate2', 'lineCopperPlate3' ] },
                {	id:'recipeCopperPlate',	    type:'recipe',	    time:3.2, outputs:[{ id:'itemCopperPlate', count:1 }], inputs:[{ id:'itemCopper', count:1 }] },
                {	id:'lineCopperPlate1',      type:'line',	    machineId:'machineFurnace1', recipeId:'recipeCopperPlate' },
                {	id:'lineCopperPlate2',      type:'line',	    reqs:[{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeCopperPlate' },
                {	id:'lineCopperPlate3',      type:'line',	    reqs:[{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeCopperPlate' },
                //---
                {	id:'itemCircuit3',          type:'item',	    reqs:[{ id:'techElectronics3', count:1 }], label:'itemCircuit', img:'img/items/Circuit3.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineCircuit31','lineCircuit32' ] },
                {	id:'recipeCircuit3',	    type:'recipe',	    reqs:[{ id:'techElectronics3', count:1 }], time:10, outputs:[{ id:'itemCircuit3', count:1 }], inputs:[{ id:'itemCopperPlate', count:40 },{ id:'itemIronPlate', count:24 },{ id:'itemPlastic', count:4 },{ id:'itemSulfuricAcid', count:5 }] },
                {	id:'lineCircuit31',         type:'line',	    reqs:[{ id:'techElectronics3', count:1 }], machineId:'machineAssembler2', recipeId:'recipeCircuit3' },
                {	id:'lineCircuit32',         type:'line',	    reqs:[{ id:'techElectronics3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeCircuit3' },
                //---
                {	id:'itemUranium',	        type:'item',	    reqs:[{ id:'techUranium', count:1 }], label:'itemUranium', img:'img/items/Uranium.png', storage:{ base:50, storerId:'storerChest' }, lines:[ 'lineUranium' ] },
                {	id:'recipeUranium',	        type:'recipe',	    reqs:[{ id:'techUranium', count:1 }], time:1, outputs:[{ id:'itemUranium', count:0.5 }] },
                {	id:'lineUranium',           type:'line',	    reqs:[{ id:'techUranium', count:1 }], machineId:'machineMiner2', recipeId:'recipeUranium' },
                //---
                {	id:'itemUraniumFuel',       type:'item',	    reqs:[{ id:'techUranium', count:1 }], label:'itemUraniumFuel', img:'img/items/UraniumFuel.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualUraniumFuel', lines:[ 'lineUraniumFuel1', 'lineUraniumFuel2', 'lineUraniumFuel3' ] },
                {	id:'recipeUraniumFuel',	    type:'recipe',	    reqs:[{ id:'techUranium', count:1 }], time:10, outputs:[{ id:'itemUraniumFuel', count:10 }], inputs:[{ id:'itemUranium', count:20 },{ id:'itemIronPlate', count:10 }] },
                {	id:'manualUraniumFuel',	    type:'manual',	    reqs:[{ id:'techUranium', count:1 }], recipeId:'recipeUraniumFuel' },
                {	id:'lineUraniumFuel1',      type:'line',	    reqs:[{ id:'techUranium', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeUraniumFuel' },
                {	id:'lineUraniumFuel2',      type:'line',	    reqs:[{ id:'techUranium', count:1 }], machineId:'machineAssembler2', recipeId:'recipeUraniumFuel' },
                {	id:'lineUraniumFuel3',      type:'line',	    reqs:[{ id:'techUranium', count:1 }], machineId:'machineAssembler3', recipeId:'recipeUraniumFuel' },
                //---
                {	id:'itemWater',	            type:'item',	    label:'itemWater', img:'img/items/Water.png', storage:{ base:10e3, storerId:'storerTank' }, lines:[ 'lineWater' ] },
                {	id:'recipeWater',	        type:'recipe',	    time:1, outputs:[{ id:'itemWater', count:100 }] },
                {	id:'lineWater',             type:'line',	    machineId:'machinePump', recipeId:'recipeWater' },
                //---
                {	id:'itemElectricity',       type:'item',	    label:'itemElectricity', img:'img/items/Electricity.png', storage:{ base:3e3, storerId:'storerAccumulator' }, lines:[ 'lineElectricity1', 'lineElectricity2' ] },
                {	id:'recipeElectricity',	    type:'recipe',	    time:1, outputs:[{ id:'itemElectricity', count:180 }], inputs:[{ id:'itemWater', count:60 }] },
                {	id:'lineElectricity1',      type:'line',	    machineId:'machineBoiler', recipeId:'recipeElectricity' },
                {	id:'lineElectricity2',      type:'line',	    reqs:[{ id:'techNuclear', count:1 }], machineId:'machineNuclearPlant', recipeId:'recipeElectricity' },
                //---
                {	id:'itemOil',	            type:'item',	    reqs:[{ id:'techOil1', count:1 }], label:'itemOil', img:'img/items/Oil.png', storage:{ base:50, storerId:'storerBarrel' }, lines:[ 'lineOil' ] },
                {	id:'recipeOil',	            type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:1, outputs:[{ id:'itemOil', count:10 }] },
                {	id:'lineOil',               type:'line',	    reqs:[{ id:'techOil1', count:1 }], machineId:'machinePumpjack', recipeId:'recipeOil' },
                //---
                {	id:'itemHeavyOil',          type:'item',	    reqs:[{ id:'techOil1', count:1 }], label:'itemHeavyOil', img:'img/items/HeavyOil.png', storage:{ base:50, storerId:'storerBarrel' }, lines:[ 'lineHeavyOil' ] },
                {	id:'recipeHeavyOil',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, outputs:[{ id:'itemHeavyOil', count:25 }], inputs:[{ id:'itemOil', count:100 },{ id:'itemWater', count:50 }] },
                {	id:'lineHeavyOil',          type:'line',	    reqs:[{ id:'techOil1', count:1 }], machineId:'machineRefinery', recipeId:'recipeHeavyOil' },
                //---
                {	id:'itemLightOil',          type:'item',	    reqs:[{ id:'techOil1', count:1 }], label:'itemLightOil', img:'img/items/LightOil.png', storage:{ base:50, storerId:'storerBarrel' }, lines:[ 'lineLightOil' ] },
                {	id:'recipeLightOil',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:2, outputs:[{ id:'itemLightOil', count:30 }], inputs:[{ id:'itemHeavyOil', count:40 },{ id:'itemWater', count:30 }] },
                {	id:'lineLightOil',          type:'line',	    reqs:[{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeLightOil' },
                //---
                {	id:'itemLubricant',         type:'item',	    reqs:[{ id:'techLubricant', count:1 }], label:'itemLubricant', img:'img/items/Lubricant.png', storage:{ base:50, storerId:'storerBarrel' }, lines:[ 'lineLubricant' ] },
                {	id:'recipeLubricant',	    type:'recipe',	    reqs:[{ id:'techLubricant', count:1 }], time:1, outputs:[{ id:'itemLubricant', count:10 }], inputs:[{ id:'itemHeavyOil', count:10 }] },
                {	id:'lineLubricant',         type:'line',	    reqs:[{ id:'techLubricant', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeLubricant' },
                //---
                {	id:'itemPetrol',	        type:'item',	    reqs:[{ id:'techOil1', count:1 }], label:'itemPetrol', img:'img/items/Petrol.png', storage:{ base:50, storerId:'storerBarrel' }, lines:[ 'linePetrol' ] },
                {	id:'recipePetrol',	        type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, outputs:[{ id:'itemPetrol', count:45 }], inputs:[{ id:'itemOil', count:100 }] },
                {	id:'linePetrol',            type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techOil1', count:1 }], machineId:'machineRefinery', recipeId:'recipePetrol' },
                //---
                {	id:'itemPlastic',	        type:'item',	    reqs:[{ id:'techPlastic', count:1 }], label:'itemPlastic', img:'img/items/Plastic.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'linePlastic' ] },
                {	id:'recipePlastic',	        type:'recipe',	    reqs:[{ id:'techPlastic', count:1 }], time:1, outputs:[{ id:'itemPlastic', count:1 }], inputs:[{ id:'itemCoal', count:1 },{ id:'itemPetrol', count:20 }] },
                {	id:'linePlastic',           type:'line',	    reqs:[{ id:'techPlastic', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipePlastic' },
                //---
                {	id:'itemSolidFuel',         type:'item',	    reqs:[{ id:'techOil2', count:1 }], label:'itemSolidFuel', img:'img/items/SolidFuel.png', storage:{ base:50, storerId:'storerChest' }, lines:[ 'lineSolidFuel' ] },
                {	id:'recipeSolidFuel',	    type:'recipe',	    reqs:[{ id:'techOil2', count:1 }], time:2, outputs:[{ id:'itemSolidFuel', count:1 }], inputs:[{ id:'itemPetrol', count:20 }] },
                {	id:'lineSolidFuel',         type:'line',	    reqs:[{ id:'techOil2', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeSolidFuel' },
                //---
                {	id:'itemRocketFuel',        type:'item',	    reqs:[{ id:'techRocketFuel', count:1 }], label:'itemRocketFuel', img:'img/items/RocketFuel.png', storage:{ base:10, storerId:'storerChest' }, lines:[ 'lineRocketFuel1','lineRocketFuel2' ] },
                {	id:'recipeRocketFuel',	    type:'recipe',	    reqs:[{ id:'techRocketFuel', count:1 }], time:30, outputs:[{ id:'itemRocketFuel', count:1 }], inputs:[{ id:'itemLightOil', count:10 },{ id:'itemSolidFuel', count:10 }] },
                {	id:'lineRocketFuel1',       type:'line',	    reqs:[{ id:'techRocketFuel', count:1 }], machineId:'machineAssembler2', recipeId:'recipeRocketFuel' },
                {	id:'lineRocketFuel2',       type:'line',	    reqs:[{ id:'techRocketFuel', count:1 }], machineId:'machineAssembler3', recipeId:'recipeRocketFuel' },
                //---
                {	id:'itemSulfur',            type:'item',	    reqs:[{ id:'techSulfur', count:1 }], label:'itemSulfur', img:'img/items/Sulfur.png', storage:{ base:50, storerId:'storerChest' }, lines:[ 'lineSulfur' ] },
                {	id:'recipeSulfur',	        type:'recipe',	    reqs:[{ id:'techSulfur', count:1 }], time:1, outputs:[{ id:'itemSulfur', count:2 }], inputs:[{ id:'itemPetrol', count:30 },{ id:'itemWater', count:30 }] },
                {	id:'lineSulfur',            type:'line',	    reqs:[{ id:'techSulfur', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeSulfur' },
                //---
                {	id:'itemSulfuricAcid',      type:'item',	    reqs:[{ id:'techSulfur', count:1 }], label:'itemSulfuricAcid', img:'img/items/SulfuricAcid.png', storage:{ base:50, storerId:'storerBarrel' }, lines:[ 'lineSulfuricAcid' ] },
                {	id:'recipeSulfuricAcid',	type:'recipe',	    reqs:[{ id:'techSulfur', count:1 }], time:1, outputs:[{ id:'itemSulfuricAcid', count:50 }], inputs:[{ id:'itemIronPlate', count:1 },{ id:'itemSulfur', count:5 },{ id:'itemWater', count:100 }] },
                {	id:'lineSulfuricAcid',      type:'line',	    reqs:[{ id:'techSulfur', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeSulfuricAcid' },
                //---
                {	id:'itemBattery',	        type:'item',	    reqs:[{ id:'techBattery', count:1 }], label:'itemBattery', img:'img/items/Battery.png', storage:{ base:200, storerId:'storerChest' }, lines:[ 'lineBattery1' ] },
                {	id:'recipeBattery',	        type:'recipe',	    reqs:[{ id:'techBattery', count:1 }], time:4, outputs:[{ id:'itemBattery', count:1 }], inputs:[{ id:'itemCopperPlate', count:1 },{ id:'itemIronPlate', count:1 },{ id:'itemSulfuricAcid', count:20 }] },
                {	id:'lineBattery1',          type:'line',	    reqs:[{ id:'techBattery', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeBattery' },
                //---
                {	id:'itemRedPack',           type:'item',	    label:'itemRedPack', img:'img/items/RedPack.png', storage:{ base:200, storerId:'storerChest' }, manualId:'manualRedPack', lines:[ 'lineRedPack' ] },
                {	id:'recipeRedPack',	        type:'recipe',	    time:5, outputs:[{ id:'itemRedPack', count:1 }], inputs:[{ id:'itemCopperPlate', count:1 },{ id:'itemIronPlate', count:2 }] },
                {	id:'manualRedPack',         type:'manual',	    recipeId:'recipeRedPack' },
                {	id:'lineRedPack',           type:'line',	    machineId:'machineLab', recipeId:'recipeRedPack' },
                //---
                {	id:'itemGreenPack',         type:'item',	    reqs:[{ id:'techGreen', count:1 }], label:'itemGreenPack', img:'img/items/GreenPack.png', storage:{ base:200, storerId:'storerChest' }, manualId:'manualGreenPack', lines:[ 'lineGreenPack' ] },
                {	id:'recipeGreenPack',	    type:'recipe',	    reqs:[{ id:'techGreen', count:1 }], time:6, outputs:[{ id:'itemGreenPack', count:1 }], inputs:[{ id:'itemCopperPlate', count:2 },{ id:'itemIronPlate', count:6 }] },
                {	id:'manualGreenPack',       type:'manual',	    reqs:[{ id:'techGreen', count:1 }], recipeId:'recipeGreenPack' },
                {	id:'lineGreenPack',         type:'line',	    reqs:[{ id:'techGreen', count:1 }], machineId:'machineLab', recipeId:'recipeGreenPack' },
                //---
                {	id:'itemBluePack',          type:'item',	    reqs:[{ id:'techBlue', count:1 }], label:'itemBluePack', img:'img/items/BluePack.png', storage:{ base:200, storerId:'storerChest' }, manualId:'manualBluePack', lines:[ 'lineBluePack' ] },
                {	id:'recipeBluePack',	    type:'recipe',	    reqs:[{ id:'techBlue', count:1 }], time:24, outputs:[{ id:'itemBluePack', count:2 }], inputs:[{ id:'itemCopperPlate', count:15 },{ id:'itemEngine1', count:2 },{ id:'itemIronPlate', count:6 },{ id:'itemPlastic', count:6 },{ id:'itemSulfur', count:1 }] },
                {	id:'manualBluePack',        type:'manual',	    reqs:[{ id:'techBlue', count:1 }], recipeId:'recipeBluePack' },
                {	id:'lineBluePack',          type:'line',	    reqs:[{ id:'techBlue', count:1 }], machineId:'machineLab', recipeId:'recipeBluePack' },
                //---
                {	id:'itemPurplePack',        type:'item',	    reqs:[{ id:'techPurple', count:1 }], label:'itemPurplePack', img:'img/items/PurplePack.png', storage:{ base:200, storerId:'storerChest' }, manualId:'manualPurplePack', lines:[ 'linePurplePack' ] },
                {	id:'recipePurplePack',	    type:'recipe',	    reqs:[{ id:'techPurple', count:1 }], time:21, outputs:[{ id:'itemPurplePack', count:3 }], inputs:[{ id:'itemCopperPlate', count:58 },{ id:'itemIronPlate', count:33 },{ id:'itemPlastic', count:20 },{ id:'itemSteel', count:25 },{ id:'itemStone', count:15 },{ id:'itemBrick', count:10 }] },
                {	id:'manualPurplePack',      type:'manual',	    reqs:[{ id:'techPurple', count:1 }], recipeId:'recipePurplePack' },
                {	id:'linePurplePack',        type:'line',	    reqs:[{ id:'techPurple', count:1 }], machineId:'machineLab', recipeId:'recipePurplePack' },
                //---
                {	id:'itemYellowPack',        type:'item',	    reqs:[{ id:'techYellow', count:1 }], label:'itemYellowPack', img:'img/items/YellowPack.png', storage:{ base:200, storerId:'storerChest' }, manualId:'manualYellowPack', lines:[ 'lineYellowPack' ] },
                {	id:'recipeYellowPack',	    type:'recipe',	    reqs:[{ id:'techYellow', count:1 }], time:21, outputs:[{ id:'itemYellowPack', count:3 }], inputs:[{ id:'itemBattery', count:2 },{ id:'itemCopperPlate', count:65 },{ id:'itemEngine2', count:1 },{ id:'itemIronPlate', count:3 },{ id:'itemPlastic', count:15 },{ id:'itemCircuit3', count:2 },{ id:'itemSteel', count:7 }] },
                {	id:'manualYellowPack',      type:'manual',	    reqs:[{ id:'techYellow', count:1 }], recipeId:'recipeYellowPack' },
                {	id:'lineYellowPack',        type:'line',	    reqs:[{ id:'techYellow', count:1 }], machineId:'machineLab', recipeId:'recipeYellowPack' },
                //---
                {	id:'itemRocketPart',        type:'item',	    reqs:[{ id:'techRocket', count:1 }], label:'itemRocketPart', img:'img/items/RocketPart.png', storage:{ base:5, storerId:'storerChest' }, lines:[ 'lineRocketPart' ] },
                {	id:'recipeRocketPart',	    type:'recipe',	    reqs:[{ id:'techRocket', count:1 }], time:3, outputs:[{ id:'itemRocketPart', count:1 }], inputs:[{ id:'itemCopperPlate', count:525 },{ id:'itemIronPlate', count:150 },{ id:'itemPlastic', count:150 },{ id:'itemCircuit3', count:10 },{ id:'itemRocketFuel', count:10 },{ id:'itemSteel', count:20 }] },
                {	id:'lineRocketPart',        type:'line',	    reqs:[{ id:'techRocket', count:1 }], machineId:'machineRocketSilo', recipeId:'recipeRocketPart' },
                //---
                {	id:'itemArmor',		        type:'item',	    reqs:[{ id:'techArmor', count:1 }], label:'itemArmor', img:'img/items/Armor.png', storage:{ base:1 }, manualId:'manualArmor' },
                {	id:'recipeArmor',	        type:'recipe',	    reqs:[{ id:'techArmor', count:1 }], time:25, outputs:[{ id:'itemArmor', count:1 }], inputs:[{ id:'itemCopperPlate', count:8400 },{ id:'itemEngine2', count:40 },{ id:'itemIronPlate', count:3500 },{ id:'itemPlastic', count:2700 },{ id:'itemCircuit3', count:310 },{ id:'itemSteel', count:60 }] },
                {	id:'manualArmor',           type:'manual',	    reqs:[{ id:'techArmor', count:1 }], recipeId:'recipeArmor' },
                //---
                {	id:'itemSatellite',		    type:'item',        reqs:[{ id:'techSpace', count:1 }], label:'itemSatellite', img:'img/items/Satellite.png', storage:{ base:1 }, manualId:'manualSatellite' },
                {	id:'recipeSatellite',	    type:'recipe',	    reqs:[{ id:'techSpace', count:1 }], time:5, outputs:[{ id:'itemSatellite', count:1 }], inputs:[{ id:'itemBattery', count:500 },{ id:'itemCopperPlate', count:4800 },{ id:'itemIronPlate', count:1800 },{ id:'itemPlastic', count:500 },{ id:'itemCircuit3', count:100 },{ id:'itemRocketFuel', count:50 },{ id:'itemSteel', count:700 }] },
                {	id:'manualSatellite',       type:'manual',	    reqs:[{ id:'techSpace', count:1 }], recipeId:'recipeSatellite' },
                //---
                {	id:'machineFurnace1',	    type:'machine',	    label:'machineFurnace1', img:'img/machines/Furnace1.png', manualId:'manualFurnace1', lines:[ 'lineFurnace11', 'lineFurnace12', 'lineFurnace13' ], speed:1, energy:{ id:'itemCoal', count:0.02 } },
                {	id:'recipeFurnace1',	    type:'recipe',	    time:2, outputs:[{ id:'machineFurnace1', count:1 }], inputs:[{ id:'itemStone', count:5 }] },
                {	id:'manualFurnace1',	    type:'manual',	    recipeId:'recipeFurnace1' },
                {	id:'lineFurnace11',         type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeFurnace1' },
                {	id:'lineFurnace12',         type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeFurnace1' },
                {	id:'lineFurnace13',         type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeFurnace1' },
                //---
                {	id:'machineFurnace2',	    type:'machine',	    reqs:[{ id:'techMaterial1', count:1 }], label:'machineFurnace2', img:'img/machines/Furnace2.png', manualId:'manualFurnace2', speed:2, energy:{ id:'itemCoal', count:0.02 } },
                {	id:'recipeFurnace2',	    type:'recipe',	    reqs:[{ id:'techMaterial1', count:1 }], time:3, outputs:[{ id:'machineFurnace2', count:1 }], inputs:[{ id:'itemBrick', count:10 },{ id:'itemSteel', count:6 }] },
                {	id:'manualFurnace2',	    type:'manual',	    reqs:[{ id:'techMaterial1', count:1 }], recipeId:'recipeFurnace2' },
                //---
                {	id:'machineFurnace3',	    type:'machine',	    reqs:[{ id:'techMaterial2', count:1 }], label:'machineFurnace3', img:'img/machines/Furnace3.png', manualId:'manualFurnace3', speed:2, energy:{ id:'itemElectricity', count:180 } },
                {	id:'recipeFurnace3',	    type:'recipe',	    reqs:[{ id:'techMaterial2', count:1 }], time:5, outputs:[{ id:'machineFurnace3', count:1 }], inputs:[{ id:'itemBrick', count:10 },{ id:'itemSteel', count:10 },{ id:'itemPlastic', count:10 },{ id:'itemIronPlate', count:10 },{ id:'itemCopperPlate', count:25 }] },
                {	id:'manualFurnace3',	    type:'manual',	    reqs:[{ id:'techMaterial2', count:1 }], recipeId:'recipeFurnace3' },
                //---
                {	id:'machineMiner1',	        type:'machine',	    label:'machineMiner1', img:'img/machines/Drill1.png', manualId:'manualMiner1', speed:0.25, energy:{ id:'itemCoal', count:0.04 } },
                {	id:'recipeMiner1',	        type:'recipe',	    time:2, outputs:[{ id:'machineMiner1', count:1 }], inputs:[{ id:'itemIronPlate', count:9 },{ id:'itemStone', count:5 }] },
                {	id:'manualMiner1',	        type:'manual',	    recipeId:'recipeMiner1' },
                //---
                {	id:'machineMiner2',	        type:'machine',	    label:'machineMiner2', img:'img/machines/Drill2.png', manualId:'manualMiner2', speed:0.5, energy:{ id:'itemElectricity', count:90 } },
                {	id:'recipeMiner2',	        type:'recipe',	    time:2, outputs:[{ id:'machineMiner2', count:1 }], inputs:[{ id:'itemCopperPlate', count:5 },{ id:'itemIronPlate', count:23 }] },
                {	id:'manualMiner2',	        type:'manual',	    recipeId:'recipeMiner2' },
                //---
                {	id:'machinePump',           type:'machine',	    label:'machinePump', img:'img/machines/Pump.png', manualId:'manualPump', speed:1 },
                {	id:'recipePump',	        type:'recipe',	    time:1, outputs:[{ id:'machinePump', count:1 }], inputs:[{ id:'itemCopperPlate', count:3 },{ id:'itemIronPlate', count:5 }] },
                {	id:'manualPump',            type:'manual',	    recipeId:'recipePump' },
                //---
                {	id:'machineBoiler',	        type:'machine',	    label:'machineBoiler', img:'img/machines/Boiler.png', manualId:'manualBoiler', speed:1, energy:{ id:'itemCoal', count:0.45 } },
                {	id:'recipeBoiler',	        type:'recipe',	    time:1, outputs:[{ id:'machineBoiler', count:1 }], inputs:[{ id:'itemBrick', count:5 },{ id:'itemIronPlate', count:4 }] },
                {	id:'manualBoiler',	        type:'manual',	    recipeId:'recipeBoiler' },
                //---
                {	id:'machineLab',	        type:'machine',	    label:'machineLab', img:'img/machines/Lab.png', manualId:'manualLab', speed:1, energy:{ id:'itemElectricity', count:60 } },
                {	id:'recipeLab',	            type:'recipe',	    time:2, outputs:[{ id:'machineLab', count:1 }], inputs:[{ id:'itemCopperPlate', count:15 },{ id:'itemIronPlate', count:36 }] },
                {	id:'manualLab',	            type:'manual',	    recipeId:'recipeLab' },
                //---
                {	id:'machinePumpjack',       type:'machine',	    reqs:[{ id:'techOil1', count:1 }], label:'machinePumpjack', img:'img/machines/Pumpjack.png', manualId:'manualPumpjack', speed:1, energy:{ id:'itemElectricity', count:90 } },
                {	id:'recipePumpjack',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, outputs:[{ id:'machinePumpjack', count:1 }], inputs:[{ id:'itemCopperPlate', count:8 },{ id:'itemIronPlate', count:35 },{ id:'itemSteel', count:5 }] },
                {	id:'manualPumpjack',        type:'manual',	    reqs:[{ id:'techOil1', count:1 }], recipeId:'recipePumpjack' },
                //---
                {	id:'machineAssembler1',     type:'machine',	    reqs:[{ id:'techAutomation1', count:1 }], label:'machineAssembler1', img:'img/machines/Assembler1.png', manualId:'manualAssembler1', speed:0.5, energy:{ id:'itemElectricity', count:75 } },
                {	id:'recipeAssembler1',	    type:'recipe',	    reqs:[{ id:'techAutomation1', count:1 }], time:1, outputs:[{ id:'machineAssembler1', count:1 }], inputs:[{ id:'itemCopperPlate', count:5 },{ id:'itemIronPlate', count:22 }] },
                {	id:'manualAssembler1',      type:'manual',	    reqs:[{ id:'techAutomation1', count:1 }], recipeId:'recipeAssembler1' },
                //---
                {	id:'machineAssembler2',     type:'machine',	    reqs:[{ id:'techAutomation2', count:1 }], label:'machineAssembler2', img:'img/machines/Assembler2.png', manualId:'manualAssembler2', speed:0.75, energy:{ id:'itemElectricity', count:150 } },
                {	id:'recipeAssembler2',	    type:'recipe',	    reqs:[{ id:'techAutomation2', count:1 }], time:1, outputs:[{ id:'machineAssembler2', count:1 }], inputs:[{ id:'itemCopperPlate', count:9 },{ id:'itemIronPlate', count:35 },{ id:'itemSteel', count:2 }] },
                {	id:'manualAssembler2',      type:'manual',	    reqs:[{ id:'techAutomation2', count:1 }], recipeId:'recipeAssembler2' },
                //---
                {	id:'machineAssembler3',     type:'machine',	    reqs:[{ id:'techAutomation3', count:1 }], label:'machineAssembler3', img:'img/machines/Assembler3.png', manualId:'manualAssembler3', speed:1.25, energy:{ id:'itemElectricity', count:375 } },
                {	id:'recipeAssembler3',	    type:'recipe',	    reqs:[{ id:'techAutomation3', count:1 }], time:1, outputs:[{ id:'machineAssembler3', count:1 }], inputs:[{ id:'itemCopperPlate', count:148 },{ id:'itemIronPlate', count:130 },{ id:'itemPlastic', count:40 },{ id:'itemSteel', count:4 }] },
                {	id:'manualAssembler3',      type:'manual',	    reqs:[{ id:'techAutomation3', count:1 }], recipeId:'recipeAssembler3' },
                //---
                {	id:'machineChemicalPlant',  type:'machine',	    reqs:[{ id:'techOil1', count:1 }], label:'machineChemicalPlant', img:'img/machines/ChemicalPlant.png', manualId:'manualChemicalPlant', speed:1, energy:{ id:'itemElectricity', count:210 } },
                {	id:'recipeChemicalPlant',	type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, outputs:[{ id:'machineChemicalPlant', count:1 }], inputs:[{ id:'itemCopperPlate', count:8 },{ id:'itemIronPlate', count:20 },{ id:'itemSteel', count:5 }] },
                {	id:'manualChemicalPlant',   type:'manual',	    reqs:[{ id:'techOil1', count:1 }], recipeId:'recipeChemicalPlant' },
                //---
                {	id:'machineRefinery',       type:'machine',	    reqs:[{ id:'techOil1', count:1 }], label:'machineRefinery', img:'img/machines/Refinery.png', manualId:'manualRefinery', speed:1, energy:{ id:'itemElectricity', count:420 } },
                {	id:'recipeRefinery',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:8, outputs:[{ id:'machineRefinery', count:1 }], inputs:[{ id:'itemCopperPlate', count:15 },{ id:'itemIronPlate', count:40 },{ id:'itemSteel', count:15 },{ id:'itemBrick', count:10 }] },
                {	id:'manualRefinery',	    type:'manual',	    reqs:[{ id:'techOil1', count:1 }], recipeId:'recipeRefinery' },
                //---
                {	id:'machineNuclearPlant',   type:'machine',	    reqs:[{ id:'techNuclear', count:1 }], label:'machineNuclearPlant', img:'img/machines/NuclearPlant.png', manualId:'manualNuclearPlant', speed:10, energy:{ id:'itemUraniumFuel', count:0.005 } },
                {	id:'recipeNuclearPlant',    type:'recipe',	    reqs:[{ id:'techNuclear', count:1 }], time:8, outputs:[{ id:'machineNuclearPlant', count:1 }], inputs:[{ id:'itemConcrete', count:500 },{ id:'itemCopperPlate', count:3e3 },{ id:'itemIronPlate', count:1e3 },{ id:'itemPlastic', count:1e3 },{ id:'itemSteel', count:500 }] },
                {	id:'manualNuclearPlant',	type:'manual',	    reqs:[{ id:'techNuclear', count:1 }], recipeId:'recipeNuclearPlant' },
                //---
                {	id:'machineRocketSilo',     type:'machine',	    reqs:[{ id:'techRocket', count:1 }], label:'machineRocketSilo', img:'img/machines/RocketSilo.png', manualId:'manualRocketSilo', speed:1, energy:{ id:'itemElectricity', count:4e3 } },
                {	id:'recipeRocketSilo',	    type:'recipe',	    reqs:[{ id:'techRocket', count:1 }], time:30, outputs:[{ id:'machineRocketSilo', count:1 }], inputs:[{ id:'itemConcrete', count:1e3 },{ id:'itemEngine2', count:200 },{ id:'itemIronPlate', count:100 },{ id:'itemCircuit3', count:200 },{ id:'itemSteel', count:1e3 }] },
                {	id:'manualRocketSilo',	    type:'manual',      reqs:[{ id:'techRocket', count:1 }], recipeId:'recipeRocketSilo' },
                //---
                {	id:'storerChest',	        type:'storer',	    label:'storerChest', img:'img/storers/Chest.png', manualId:'manualChest' },
                {	id:'recipeChest',	        type:'recipe',	    time:1, outputs:[{ id:'storerChest', count:1 }], inputs:[{ id:'itemIronPlate', count:8 }] },
                {	id:'manualChest',	        type:'manual',	    recipeId:'recipeChest' },
                //---
                {	id:'storerBarrel',          type:'storer',	    reqs:[{ id:'techFluid', count:1 }], label:'storerBarrel', img:'img/storers/Barrel.png', manualId:'manualBarrel' },
                {	id:'recipeBarrel',          type:'recipe',	    reqs:[{ id:'techFluid', count:1 }], time:1, outputs:[{ id:'storerBarrel', count:1 }], inputs:[{ id:'itemSteel', count:1 }] },
                {	id:'manualBarrel',          type:'manual',	    reqs:[{ id:'techFluid', count:1 }], recipeId:'recipeBarrel' },
                //---
                {	id:'storerTank',            type:'storer',	    reqs:[{ id:'techFluid', count:1 }], label:'storerTank', img:'img/storers/Tank.png', manualId:'manualTank' },
                {	id:'recipeTank',            type:'recipe',	    reqs:[{ id:'techFluid', count:1 }], time:3, outputs:[{ id:'storerTank', count:1 }], inputs:[{ id:'itemIronPlate', count:20 },{ id:'itemSteel', count:5 }] },
                {	id:'manualTank',            type:'manual',	    reqs:[{ id:'techFluid', count:1 }], recipeId:'recipeTank' },
                //---
                {	id:'storerAccumulator',     type:'storer',	    reqs:[{ id:'techAccumulator', count:1 }], label:'storerAccumulator', img:'img/storers/Accumulator.png', manualId:'manualAccumulator' },
                {	id:'recipeAccumulator',     type:'recipe',	    reqs:[{ id:'techAccumulator', count:1 }], time:10, outputs:[{ id:'storerAccumulator', count:1 }], inputs:[{ id:'itemBattery', count:5 },{ id:'itemIronPlate', count:2 }] },
                {	id:'manualAccumulator',     type:'manual',	    reqs:[{ id:'techAccumulator', count:1 }], recipeId:'recipeAccumulator' },
            ]
        }},
    ]
}
