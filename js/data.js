//---
var DATA = {
    //---
    scenarios:[
        //---
        { id:'tut', label:'scenario_tut', desc:'scenarioDesc_tut', ready:true, data:{
            //---
            victoryReqs:[{ id:'tutMission6', count:1 }],
            //---
            catMissions:[ 'mission' ],
            catItems:[ 'machine', 'storer', 'energy', 'raw', 'level1', 'level2' ],
            //---
            elems:[
            
                // Missions
                //---
                {	id:'tutMission1',	        type:'item',        cat:'mission', label:'tutMission1', desc:'tutMission1Desc', costs:[{ id:'itemStone', count:5 }], rewards:[{ id:'itemStone', count:5 }] },
                {	id:'tutMission2',	        type:'item',	    cat:'mission', reqs:[{ id:'tutMission1', count:1 }], label:'tutMission2', desc:'tutMission2Desc', costs:[{ id:'machineFurnace1', count:1 }], rewards:[{ id:'machineFurnace1', count:1 }] },
                {	id:'tutMission3',	        type:'item',	    cat:'mission', reqs:[{ id:'tutMission2', count:1 }], label:'tutMission3', desc:'tutMission3Desc', costs:[{ id:'itemIronPlate', count:1 }], rewards:[{ id:'itemIronPlate', count:1 }] },
                {	id:'tutMission4',	        type:'item',	    cat:'mission', reqs:[{ id:'tutMission3', count:1 }], label:'tutMission4', desc:'tutMission4Desc', costs:[{ id:'machineMiner1', count:1 }], rewards:[{ id:'machineMiner1', count:1 }] },
                {	id:'tutMission5',	        type:'item',	    cat:'mission', reqs:[{ id:'tutMission4', count:1 }], label:'tutMission5', desc:'tutMission5Desc', costs:[{ id:'storerChest', count:1 }], rewards:[{ id:'storerChest', count:1 }] },
                {	id:'tutMission6',	        type:'item',	    cat:'mission', reqs:[{ id:'tutMission5', count:1 }], label:'tutMission6', desc:'tutMission6Desc', costs:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }], rewards:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }] },
                
                // Energy
                //---
                {	id:'itemCoal',		        type:'item',	    cat:'energy', reqs:[{ id:'tutMission2', count:1 }], label:'itemCoal', img:'img/items/Coal.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeCoal', lines:[ 'manualCoal', 'lineCoal1' ] },
                {	id:'recipeCoal',	        type:'recipe',	    reqs:[{ id:'tutMission2', count:1 }], time:1, output:{ id:'itemCoal', count:1 } },
                {	id:'manualCoal',	        type:'line',        reqs:[{ id:'tutMission2', count:1 }], machineId:'machineManual', recipeId:'recipeCoal' },
                {	id:'lineCoal1',	            type:'line',	    reqs:[{ id:'tutMission2', count:1 }], machineId:'machineMinerCoal', recipeId:'recipeCoal', initCount:1 },
                
                // Raw
                //---
                {	id:'itemStone',		        type:'item',	    cat:'raw', label:'itemStone', img:'img/items/Stone.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeStone', lines:[ 'manualStone', 'lineStone1' ] },
                {	id:'recipeStone',	        type:'recipe',	    time:1, output:{ id:'itemStone', count:1 } },
                {	id:'manualStone',	        type:'line',        machineId:'machineManual', recipeId:'recipeStone' },
                {	id:'lineStone1',	        type:'line',	    reqs:[{ id:'tutMission4', count:1 }], machineId:'machineMiner1', recipeId:'recipeStone' },
                //---
                {	id:'itemIron',		        type:'item',	    cat:'raw', reqs:[{ id:'tutMission2', count:1 }], label:'itemIron', img:'img/items/Iron.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeIron', lines:[ 'manualIron', 'lineIron1' ] },
                {	id:'recipeIron',	        type:'recipe',	    reqs:[{ id:'tutMission2', count:1 }], time:1, output:{ id:'itemIron', count:1 } },
                {	id:'manualIron',	        type:'line',        reqs:[{ id:'tutMission2', count:1 }], machineId:'machineManual', recipeId:'recipeIron' },
                {	id:'lineIron1',	            type:'line',	    reqs:[{ id:'tutMission4', count:1 }], machineId:'machineMiner1', recipeId:'recipeIron', initCount:1 },
                
                // Level 1
                //---
                {	id:'itemIronPlate',		    type:'item',	    cat:'level1', reqs:[{ id:'tutMission2', count:1 }], label:'itemIronPlate', img:'img/items/IronPlate.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeIronPlate', lines:[ 'lineIronPlate1' ] },
                {	id:'recipeIronPlate',	    type:'recipe',	    reqs:[{ id:'tutMission2', count:1 }], time:3.2, output:{ id:'itemIronPlate', count:1 }, inputs:[{ id:'itemIron', count:1 }] },
                {	id:'lineIronPlate1',        type:'line',	    reqs:[{ id:'tutMission2', count:1 }], machineId:'machineFurnace1', recipeId:'recipeIronPlate' },

                // Level 2
                //---
                {	id:'itemIronWheel',		    type:'item',	    cat:'level2', reqs:[{ id:'tutMission3', count:1 }], label:'itemIronWheel', img:'img/items/IronWheel.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeIronWheel', lines:[ 'manualIronWheel' ] },
                {	id:'recipeIronWheel',	    type:'recipe',	    reqs:[{ id:'tutMission3', count:1 }], time:1, output:{ id:'itemIronWheel', count:1 }, inputs:[{ id:'itemIronPlate', count:2 }]	},
                {	id:'manualIronWheel',	    type:'line',        reqs:[{ id:'tutMission3', count:1 }], machineId:'machineManual', recipeId:'recipeIronWheel' },
                
                // Machines
                //---
                {	id:'machineManual',	        type:'item',	    label:'machineManual', img:'img/machines/Manual.png', storage:{ base:1 }, speed:0.25, initCount:1 },
                //---
                {	id:'machineFurnace1',	    type:'item',	    cat:'machine', reqs:[{ id:'tutMission1', count:1 }], label:'machineFurnace1', img:'img/machines/Furnace1.png', recipeId:'recipeFurnace1', lines:[ 'manualFurnace1' ], speed:0.25, energy:{ id:'itemCoal', count:0.02 } },
                {	id:'recipeFurnace1',	    type:'recipe',	    reqs:[{ id:'tutMission1', count:1 }], time:2, output:{ id:'machineFurnace1', count:1 }, inputs:[{ id:'itemStone', count:5 }] },
                {	id:'manualFurnace1',	    type:'line',        reqs:[{ id:'tutMission1', count:1 }], machineId:'machineManual', recipeId:'recipeFurnace1' },
                //---
                {	id:'machineMinerCoal',	    type:'item',	    cat:'machine', reqs:[{ id:'tutMission2', count:1 }], label:'machineMinerCoal', img:'img/machines/DrillCoal.png', recipeId:'recipeMinerCoal', lines:[ 'manualMinerCoal' ], speed:0.25 },
                {	id:'recipeMinerCoal',	    type:'recipe',	    reqs:[{ id:'tutMission2', count:1 }], time:2, output:{ id:'machineMinerCoal', count:1 }, inputs:[{ id:'machineFurnace1', count:1 }] },
                {	id:'manualMinerCoal',	    type:'line',        reqs:[{ id:'tutMission2', count:1 }], machineId:'machineManual', recipeId:'recipeMinerCoal' },
                //---
                {	id:'machineMiner1',	        type:'item',	    cat:'machine', reqs:[{ id:'tutMission3', count:1 }], label:'machineMiner1', img:'img/machines/Drill1.png', recipeId:'recipeMiner1', lines:[ 'manualMiner1' ], speed:0.25, energy:{ id:'itemCoal', count:0.04 } },
                {	id:'recipeMiner1',	        type:'recipe',	    reqs:[{ id:'tutMission3', count:1 }], time:2, output:{ id:'machineMiner1', count:1 }, inputs:[{ id:'itemIronPlate', count:3 },{ id:'itemIronWheel', count:3 },{ id:'machineFurnace1', count:1 }] },
                {	id:'manualMiner1',	        type:'line',        reqs:[{ id:'tutMission3', count:1 }], machineId:'machineManual', recipeId:'recipeMiner1' },
                
                // Storers
                //---
                {	id:'storerChest',	        type:'item',	    cat:'storer', reqs:[{ id:'tutMission4', count:1 }], label:'storerChest', img:'img/storers/Chest.png', recipeId:'recipeChest', lines:[ 'manualChest' ] },
                {	id:'recipeChest',	        type:'recipe',	    reqs:[{ id:'tutMission4', count:1 }], time:1, output:{ id:'storerChest', count:1 }, inputs:[{ id:'itemIronPlate', count:8 }] },
                {	id:'manualChest',	        type:'line',        reqs:[{ id:'tutMission4', count:1 }], machineId:'machineManual', recipeId:'recipeChest' },
            ]
        }},
        //---
        { id:'factorio1', label:'scenario_factorio1', desc:'scenarioDesc_factorio1', ready:true, data:{
            //---
            victoryReqs:[{ id:'factorio1Obj', count:1 }],
            //---
            catMissions:[ 'mission', 'tech' ],
            catItems:[ 'machine', 'storer', 'energy', 'raw', 'level1', 'level2', 'level3', 'level4', 'level5', 'science' ],
            //---
            elems:[
            
                // Missions
                //---
                {	id:'factorio1Obj',	        type:'item',	    cat:'mission', label:'factorio1Obj', desc:'factorio1ObjDesc', costs:[{ id:'itemArmor', count:1 },{ id:'itemRocketPart', count:100 },{ id:'itemSatellite', count:1 }] },

                // Techs
                //---                
                {	id:'techAutomation1',	    type:'item',	    cat:'tech', label:'techAutomation1', costs:[{ id:'itemRedPack', count:10 }] },
                {	id:'techSteel',	            type:'item',	    cat:'tech', label:'techSteel', costs:[{ id:'itemRedPack', count:50 }] },
                {	id:'techGreen',	            type:'item',	    cat:'tech', label:'techGreen', costs:[{ id:'itemRedPack', count:75 }] },
                {	id:'techAutomation2',	    type:'item',	    cat:'tech', reqs:[{ id:'techGreen', count:1 },{ id:'techSteel', count:1 }], label:'techAutomation2', costs:[{ id:'itemRedPack', count:40 },{ id:'itemGreenPack', count:40 }] },
                {	id:'techMaterial1',	        type:'item',	    cat:'tech', reqs:[{ id:'techGreen', count:1 },{ id:'techSteel', count:1 }], label:'techMaterial1', costs:[{ id:'itemRedPack', count:75 },{ id:'itemGreenPack', count:75 }] },
                {	id:'techEngine1',	        type:'item',	    cat:'tech', reqs:[{ id:'techGreen', count:1 },{ id:'techSteel', count:1 }], label:'techEngine1', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 }] },
                {	id:'techFluid',	            type:'item',	    cat:'tech', reqs:[{ id:'techAutomation2', count:1 },{ id:'techEngine1', count:1 }], label:'techFluid', costs:[{ id:'itemRedPack', count:50 },{ id:'itemGreenPack', count:50 }] },
                {	id:'techOil1',	            type:'item',	    cat:'tech', reqs:[{ id:'techFluid', count:1 }], label:'techOil1', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 }] },
                {	id:'techSulfur',	        type:'item',	    cat:'tech', reqs:[{ id:'techOil1', count:1 }], label:'techSulfur', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 }] },
                {	id:'techBattery',	        type:'item',	    cat:'tech', reqs:[{ id:'techSulfur', count:1 }], label:'techBattery', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 }] },
                {	id:'techAccumulator',	    type:'item',	    cat:'tech', reqs:[{ id:'techBattery', count:1 }], label:'techAccumulator', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 }] },
                {	id:'techPlastic',	        type:'item',	    cat:'tech', reqs:[{ id:'techOil1', count:1 }], label:'techPlastic', costs:[{ id:'itemRedPack', count:200 },{ id:'itemGreenPack', count:200 }] },
                {	id:'techConcrete',	        type:'item',	    cat:'tech', reqs:[{ id:'techAutomation2', count:1 }], label:'techConcrete', costs:[{ id:'itemRedPack', count:250 },{ id:'itemGreenPack', count:250 }] },
                {	id:'techBlue',	            type:'item',	    cat:'tech', reqs:[{ id:'techPlastic', count:1 },{ id:'techSulfur', count:1 }], label:'techBlue', costs:[{ id:'itemRedPack', count:75 },{ id:'itemGreenPack', count:75 }] },
                {	id:'techOil2',	            type:'item',	    cat:'tech', reqs:[{ id:'techBlue', count:1 }], label:'techOil2', costs:[{ id:'itemRedPack', count:75 },{ id:'itemGreenPack', count:75 },{ id:'itemBluePack', count:75 }] },
                {	id:'techLubricant',	        type:'item',	    cat:'tech', reqs:[{ id:'techOil2', count:1 }], label:'techLubricant', costs:[{ id:'itemRedPack', count:50 },{ id:'itemGreenPack', count:50 },{ id:'itemBluePack', count:50 }] },
                {	id:'techEngine2',	        type:'item',	    cat:'tech', reqs:[{ id:'techLubricant', count:1 }], label:'techEngine2', costs:[{ id:'itemRedPack', count:50 },{ id:'itemGreenPack', count:50 },{ id:'itemBluePack', count:50 }] },
                {	id:'techUranium',	        type:'item',	    cat:'tech', reqs:[{ id:'techBlue', count:1 },{ id:'techConcrete', count:1 }], label:'techUranium', costs:[{ id:'itemRedPack', count:200 },{ id:'itemGreenPack', count:200 },{ id:'itemBluePack', count:200 }] },
                {	id:'techMaterial2',	        type:'item',	    cat:'tech', reqs:[{ id:'techBlue', count:1 }], label:'techMaterial2', costs:[{ id:'itemRedPack', count:250 },{ id:'itemGreenPack', count:250 },{ id:'itemBluePack', count:250 }] },
                {	id:'techElectronics3',	    type:'item',	    cat:'tech', reqs:[{ id:'techBlue', count:1 }], label:'techElectronics3', costs:[{ id:'itemRedPack', count:300 },{ id:'itemGreenPack', count:300 },{ id:'itemBluePack', count:300 }] },
                {	id:'techRocketFuel',	    type:'item',	    cat:'tech', reqs:[{ id:'techOil2', count:1 }], label:'techRocketFuel', costs:[{ id:'itemRedPack', count:300 },{ id:'itemGreenPack', count:300 },{ id:'itemBluePack', count:300 }] },
                {	id:'techNuclear',	        type:'item',	    cat:'tech', reqs:[{ id:'techUranium', count:1 }], label:'techNuclear', costs:[{ id:'itemRedPack', count:800 },{ id:'itemGreenPack', count:800 },{ id:'itemBluePack', count:800 }] },
                {	id:'techPurple',	        type:'item',	    cat:'tech', reqs:[{ id:'techMaterial2', count:1 }], label:'techPurple', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 },{ id:'itemBluePack', count:100 }] },
                {	id:'techAutomation3',	    type:'item',	    cat:'tech', reqs:[{ id:'techPurple', count:1 }], label:'techAutomation3', costs:[{ id:'itemRedPack', count:150 },{ id:'itemGreenPack', count:150 },{ id:'itemBluePack', count:150 },{ id:'itemPurplePack', count:150 }] },
                {	id:'techYellow',	        type:'item',	    cat:'tech', reqs:[{ id:'techElectronics3', count:1 }], label:'techYellow', costs:[{ id:'itemRedPack', count:100 },{ id:'itemGreenPack', count:100 },{ id:'itemBluePack', count:100 }] },
                {	id:'techArmor',	            type:'item',	    cat:'tech', reqs:[{ id:'techElectronics3', count:1 },{ id:'techEngine2', count:1 }], label:'techArmor', costs:[{ id:'itemRedPack', count:400 },{ id:'itemGreenPack', count:400 },{ id:'itemBluePack', count:400 },{ id:'itemPurplePack', count:400 },{ id:'itemYellowPack', count:400 }] },
                {	id:'techRocket',	        type:'item',	    cat:'tech', reqs:[{ id:'techConcrete', count:1 },{ id:'techRocketFuel', count:1 }], label:'techRocket', costs:[{ id:'itemRedPack', count:1e3 },{ id:'itemGreenPack', count:1e3 },{ id:'itemBluePack', count:1e3 },{ id:'itemPurplePack', count:1e3 },{ id:'itemYellowPack', count:1e3 }] },
                {	id:'techSpace',	            type:'item',	    cat:'tech', reqs:[{ id:'techRocket', count:1 }], label:'techSpace', costs:[{ id:'itemRedPack', count:2e3 },{ id:'itemGreenPack', count:2e3 },{ id:'itemBluePack', count:2e3 },{ id:'itemPurplePack', count:2e3 },{ id:'itemYellowPack', count:2e3 }] },
                
                // Energy
                //---
                {	id:'itemWater',	            type:'item',	    cat:'energy', label:'itemWater', img:'img/items/Water.png', storage:{ base:10e3, storerId:'storerTank' }, recipeId:'recipeWater', lines:[ 'lineWater' ] },
                {	id:'recipeWater',	        type:'recipe',	    time:1, output:{ id:'itemWater', count:100 } },
                {	id:'lineWater',             type:'line',	    machineId:'machinePump', recipeId:'recipeWater' },
                //---
                {	id:'itemCoal',	            type:'item',	    cat:'energy', label:'itemCoal', img:'img/items/Coal.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeCoal', lines:[ 'manualCoal', 'lineCoal1', 'lineCoal2' ] },
                {	id:'recipeCoal',	        type:'recipe',	    time:1, output:{ id:'itemCoal', count:1 } },
                {	id:'manualCoal',	        type:'line',        machineId:'machineManual', recipeId:'recipeCoal' },
                {	id:'lineCoal1',             type:'line',	    machineId:'machineMinerCoal', recipeId:'recipeCoal' },
                {	id:'lineCoal2',             type:'line',	    machineId:'machineMiner2', recipeId:'recipeCoal' },
                //---
                {	id:'itemUranium',	        type:'item',	    cat:'energy', reqs:[{ id:'techUranium', count:1 }], label:'itemUranium', img:'img/items/Uranium.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeUranium', lines:[ 'lineUranium' ] },
                {	id:'recipeUranium',	        type:'recipe',	    reqs:[{ id:'techUranium', count:1 }], time:1, output:{ id:'itemUranium', count:0.5 } },
                {	id:'lineUranium',           type:'line',	    reqs:[{ id:'techUranium', count:1 }], machineId:'machineMiner2', recipeId:'recipeUranium' },
                //---
                {	id:'itemUraniumFuel',       type:'item',	    cat:'energy', reqs:[{ id:'techUranium', count:1 }], label:'itemUraniumFuel', img:'img/items/UraniumFuel.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeUraniumFuel', lines:[ 'manualUraniumFuel', 'lineUraniumFuel1', 'lineUraniumFuel2', 'lineUraniumFuel3' ] },
                {	id:'recipeUraniumFuel',	    type:'recipe',	    reqs:[{ id:'techUranium', count:1 }], time:1, output:{ id:'itemUraniumFuel', count:1 }, inputs:[{ id:'itemUranium', count:2 },{ id:'itemIronPlate', count:1 }] },
                {	id:'manualUraniumFuel',	    type:'line',        reqs:[{ id:'techUranium', count:1 }], machineId:'machineManual', recipeId:'recipeUraniumFuel' },
                {	id:'lineUraniumFuel1',      type:'line',	    reqs:[{ id:'techUranium', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeUraniumFuel' },
                {	id:'lineUraniumFuel2',      type:'line',	    reqs:[{ id:'techUranium', count:1 }], machineId:'machineAssembler2', recipeId:'recipeUraniumFuel' },
                {	id:'lineUraniumFuel3',      type:'line',	    reqs:[{ id:'techUranium', count:1 }], machineId:'machineAssembler3', recipeId:'recipeUraniumFuel' },
                //---
                {	id:'itemElectricity',       type:'item',	    cat:'energy', label:'itemElectricity', img:'img/items/Electricity.png', storage:{ base:3e3, storerId:'storerAccumulator' }, recipeId:'recipeElectricity', lines:[ 'lineElectricity1', 'lineElectricity2' ] },
                {	id:'recipeElectricity',	    type:'recipe',	    time:1, output:{ id:'itemElectricity', count:180 }, inputs:[{ id:'itemWater', count:60 }] },
                {	id:'lineElectricity1',      type:'line',	    machineId:'machineBoiler', recipeId:'recipeElectricity' },
                {	id:'lineElectricity2',      type:'line',	    reqs:[{ id:'techNuclear', count:1 }], machineId:'machineNuclearPlant', recipeId:'recipeElectricity' },
                
                // Raw
                //---
                {	id:'itemStone',		        type:'item',	    cat:'raw', label:'itemStone', img:'img/items/Stone.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeStone', lines:[ 'manualStone', 'lineStone1', 'lineStone2' ] },
                {	id:'recipeStone',	        type:'recipe',	    time:1, output:{ id:'itemStone', count:1 } },
                {	id:'manualStone',	        type:'line',        machineId:'machineManual', recipeId:'recipeStone' },
                {	id:'lineStone1',            type:'line',	    machineId:'machineMiner1', recipeId:'recipeStone' },
                {	id:'lineStone2',            type:'line',	    machineId:'machineMiner2', recipeId:'recipeStone' },                
                //---
                {	id:'itemIron',	            type:'item',        cat:'raw', label:'itemIron', img:'img/items/Iron.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeIron', lines:[ 'manualIron', 'lineIron1', 'lineIron2' ] },
                {	id:'recipeIron',	        type:'recipe',	    time:1, output:{ id:'itemIron', count:1 } },
                {	id:'manualIron',	        type:'line',        machineId:'machineManual', recipeId:'recipeIron' },
                {	id:'lineIron1',             type:'line',	    machineId:'machineMiner1', recipeId:'recipeIron' },
                {	id:'lineIron2',             type:'line',	    machineId:'machineMiner2', recipeId:'recipeIron' },
                //---
                {	id:'itemCopper',	        type:'item',	    cat:'raw', label:'itemCopper', img:'img/items/Copper.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeCopper', lines:[ 'manualCopper', 'lineCopper1', 'lineCopper2' ] },
                {	id:'recipeCopper',	        type:'recipe',	    time:1, output:{ id:'itemCopper', count:1 } },
                {	id:'manualCopper',	        type:'line',        machineId:'machineManual', recipeId:'recipeCopper' },
                {	id:'lineCopper1',           type:'line',	    machineId:'machineMiner1', recipeId:'recipeCopper' },
                {	id:'lineCopper2',           type:'line',	    machineId:'machineMiner2', recipeId:'recipeCopper' },
                //---
                {	id:'itemOil',	            type:'item',	    cat:'raw', reqs:[{ id:'techOil1', count:1 }], label:'itemOil', img:'img/items/Oil.png', storage:{ base:50, storerId:'storerBarrel' }, recipeId:'recipeOil', lines:[ 'lineOil' ] },
                {	id:'recipeOil',	            type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:1, output:{ id:'itemOil', count:10 } },
                {	id:'lineOil',               type:'line',	    reqs:[{ id:'techOil1', count:1 }], machineId:'machinePumpjack', recipeId:'recipeOil' },

                // Level 1
                //---   
                {	id:'itemBrick',             type:'item',	    cat:'level1', label:'itemBrick', img:'img/items/Brick.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeBrick', lines:[ 'lineBrick1', 'lineBrick2', 'lineBrick3' ] },
                {	id:'recipeBrick',	        type:'recipe',	    time:3.2, output:{ id:'itemBrick', count:1 }, inputs:[{ id:'itemStone', count:2 }] },
                {	id:'lineBrick1',            type:'line',	    machineId:'machineFurnace1', recipeId:'recipeBrick' },
                {	id:'lineBrick2',            type:'line',	    reqs:[{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeBrick' },
                {	id:'lineBrick3',            type:'line',	    reqs:[{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeBrick' },
                //---
                {	id:'itemIronPlate',         type:'item',	    cat:'level1', label:'itemIronPlate', img:'img/items/IronPlate.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeIronPlate', lines:[ 'lineIronPlate1', 'lineIronPlate2', 'lineIronPlate3' ] },
                {	id:'recipeIronPlate',	    type:'recipe',	    time:3.2, output:{ id:'itemIronPlate', count:1 }, inputs:[{ id:'itemIron', count:1 }] },
                {	id:'lineIronPlate1',        type:'line',	    machineId:'machineFurnace1', recipeId:'recipeIronPlate' },
                {	id:'lineIronPlate2',        type:'line',	    reqs:[{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeIronPlate' },
                {	id:'lineIronPlate3',        type:'line',	    reqs:[{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeIronPlate' },
                //---
                {	id:'itemCopperPlate',       type:'item',	    cat:'level1', label:'itemCopperPlate', img:'img/items/CopperPlate.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeCopperPlate', lines:[ 'lineCopperPlate1', 'lineCopperPlate2', 'lineCopperPlate3' ] },
                {	id:'recipeCopperPlate',	    type:'recipe',	    time:3.2, output:{ id:'itemCopperPlate', count:1 }, inputs:[{ id:'itemCopper', count:1 }] },
                {	id:'lineCopperPlate1',      type:'line',	    machineId:'machineFurnace1', recipeId:'recipeCopperPlate' },
                {	id:'lineCopperPlate2',      type:'line',	    reqs:[{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeCopperPlate' },
                {	id:'lineCopperPlate3',      type:'line',	    reqs:[{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeCopperPlate' },
                //---
                {	id:'itemHeavyOil',          type:'item',	    cat:'level1', reqs:[{ id:'techOil1', count:1 }], label:'itemHeavyOil', img:'img/items/HeavyOil.png', storage:{ base:50, storerId:'storerBarrel' }, recipeId:'recipeHeavyOil', lines:[ 'lineHeavyOil' ] },
                {	id:'recipeHeavyOil',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, output:{ id:'itemHeavyOil', count:25 }, inputs:[{ id:'itemOil', count:100 },{ id:'itemWater', count:50 }] },
                {	id:'lineHeavyOil',          type:'line',	    reqs:[{ id:'techOil1', count:1 }], machineId:'machineRefinery', recipeId:'recipeHeavyOil' },
                //---
                {	id:'itemPetrol',	        type:'item',	    cat:'level1', reqs:[{ id:'techOil1', count:1 }], label:'itemPetrol', img:'img/items/Petrol.png', storage:{ base:50, storerId:'storerBarrel' }, recipeId:'recipePetrol', lines:[ 'linePetrol' ] },
                {	id:'recipePetrol',	        type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, output:{ id:'itemPetrol', count:45 }, inputs:[{ id:'itemOil', count:100 }] },
                {	id:'linePetrol',            type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techOil1', count:1 }], machineId:'machineRefinery', recipeId:'recipePetrol' },
                //---
                {	id:'itemPlastic',	        type:'item',	    cat:'level1', reqs:[{ id:'techPlastic', count:1 }], label:'itemPlastic', img:'img/items/Plastic.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipePlastic', lines:[ 'linePlastic' ] },
                {	id:'recipePlastic',	        type:'recipe',	    reqs:[{ id:'techPlastic', count:1 }], time:1, output:{ id:'itemPlastic', count:1 }, inputs:[{ id:'itemCoal', count:1 },{ id:'itemPetrol', count:20 }] },
                {	id:'linePlastic',           type:'line',	    reqs:[{ id:'techPlastic', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipePlastic' },
                
                // Level 2
                //---
                {	id:'itemSteel',             type:'item',	    cat:'level2', reqs:[{ id:'techSteel', count:1 }], label:'itemSteel', img:'img/items/Steel.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeSteel', lines:[ 'lineSteel1', 'lineSteel2', 'lineSteel3' ] },
                {	id:'recipeSteel',	        type:'recipe',	    reqs:[{ id:'techSteel', count:1 }], time:16, output:{ id:'itemSteel', count:1 }, inputs:[{ id:'itemIronPlate', count:5 }] },
                {	id:'lineSteel1',            type:'line',	    reqs:[{ id:'techSteel', count:1 }], machineId:'machineFurnace1', recipeId:'recipeSteel' },
                {	id:'lineSteel2',            type:'line',	    reqs:[{ id:'techSteel', count:1 },{ id:'techMaterial1', count:1 }], machineId:'machineFurnace2', recipeId:'recipeSteel' },
                {	id:'lineSteel3',            type:'line',	    reqs:[{ id:'techSteel', count:1 },{ id:'techMaterial2', count:1 }], machineId:'machineFurnace3', recipeId:'recipeSteel' },
                //---
                {	id:'itemConcrete',          type:'item',	    cat:'level2', reqs:[{ id:'techConcrete', count:1 }], label:'itemConcrete', img:'img/items/Concrete.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeConcrete', lines:[ 'lineConcrete1', 'lineConcrete2' ] },
                {	id:'recipeConcrete',	    type:'recipe',	    reqs:[{ id:'techConcrete', count:1 }], time:10, output:{ id:'itemConcrete', count:10 }, inputs:[{ id:'itemIron', count:1 },{ id:'itemBrick', count:5 },{ id:'itemWater', count:100 }] },
                {	id:'lineConcrete1',         type:'line',	    reqs:[{ id:'techConcrete', count:1 }], machineId:'machineAssembler2', recipeId:'recipeConcrete' },
                {	id:'lineConcrete2',         type:'line',	    reqs:[{ id:'techConcrete', count:1 }], machineId:'machineAssembler3', recipeId:'recipeConcrete' },
                //---
                {	id:'itemLightOil',          type:'item',	    cat:'level2', reqs:[{ id:'techOil1', count:1 }], label:'itemLightOil', img:'img/items/LightOil.png', storage:{ base:50, storerId:'storerBarrel' }, recipeId:'recipeLightOil', lines:[ 'lineLightOil' ] },
                {	id:'recipeLightOil',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:2, output:{ id:'itemLightOil', count:30 }, inputs:[{ id:'itemHeavyOil', count:40 },{ id:'itemWater', count:30 }] },
                {	id:'lineLightOil',          type:'line',	    reqs:[{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeLightOil' },
                //---
                {	id:'itemSolidFuel',         type:'item',	    cat:'level2', reqs:[{ id:'techOil2', count:1 }], label:'itemSolidFuel', img:'img/items/SolidFuel.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeSolidFuel', lines:[ 'lineSolidFuel' ] },
                {	id:'recipeSolidFuel',	    type:'recipe',	    reqs:[{ id:'techOil2', count:1 }], time:2, output:{ id:'itemSolidFuel', count:1 }, inputs:[{ id:'itemPetrol', count:20 }] },
                {	id:'lineSolidFuel',         type:'line',	    reqs:[{ id:'techOil2', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeSolidFuel' },
                //---
                {	id:'itemLubricant',         type:'item',	    cat:'level2', reqs:[{ id:'techLubricant', count:1 }], label:'itemLubricant', img:'img/items/Lubricant.png', storage:{ base:50, storerId:'storerBarrel' }, recipeId:'recipeLubricant', lines:[ 'lineLubricant' ] },
                {	id:'recipeLubricant',	    type:'recipe',	    reqs:[{ id:'techLubricant', count:1 }], time:1, output:{ id:'itemLubricant', count:10 }, inputs:[{ id:'itemHeavyOil', count:10 }] },
                {	id:'lineLubricant',         type:'line',	    reqs:[{ id:'techLubricant', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeLubricant' },
                //---
                {	id:'itemSulfur',            type:'item',	    cat:'level2', reqs:[{ id:'techSulfur', count:1 }], label:'itemSulfur', img:'img/items/Sulfur.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeSulfur', lines:[ 'lineSulfur' ] },
                {	id:'recipeSulfur',	        type:'recipe',	    reqs:[{ id:'techSulfur', count:1 }], time:1, output:{ id:'itemSulfur', count:2 }, inputs:[{ id:'itemPetrol', count:30 },{ id:'itemWater', count:30 }] },
                {	id:'lineSulfur',            type:'line',	    reqs:[{ id:'techSulfur', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeSulfur' },

                // Level 3
                //---
                {	id:'itemEngine1',           type:'item',	    cat:'level3', reqs:[{ id:'techEngine1', count:1 }], label:'itemEngine1', img:'img/items/Engine1.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeEngine1', lines:[ 'lineEngine11', 'lineEngine12', 'lineEngine13' ] },
                {	id:'recipeEngine1',	        type:'recipe',	    reqs:[{ id:'techEngine1', count:1 }], time:10, output:{ id:'itemEngine1', count:1 }, inputs:[{ id:'itemIronPlate', count:4 },{ id:'itemSteel', count:1 }] },
                {	id:'lineEngine11',          type:'line',	    reqs:[{ id:'techEngine1', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeEngine1' },
                {	id:'lineEngine12',          type:'line',	    reqs:[{ id:'techEngine1', count:1 }], machineId:'machineAssembler2', recipeId:'recipeEngine1' },
                {	id:'lineEngine13',          type:'line',	    reqs:[{ id:'techEngine1', count:1 }], machineId:'machineAssembler3', recipeId:'recipeEngine1' },
                //---
                {	id:'itemRocketFuel',        type:'item',	    cat:'level3', reqs:[{ id:'techRocketFuel', count:1 }], label:'itemRocketFuel', img:'img/items/RocketFuel.png', storage:{ base:10, storerId:'storerChest' }, recipeId:'recipeRocketFuel', lines:[ 'lineRocketFuel1','lineRocketFuel2' ] },
                {	id:'recipeRocketFuel',	    type:'recipe',	    reqs:[{ id:'techRocketFuel', count:1 }], time:30, output:{ id:'itemRocketFuel', count:1 }, inputs:[{ id:'itemLightOil', count:10 },{ id:'itemSolidFuel', count:10 }] },
                {	id:'lineRocketFuel1',       type:'line',	    reqs:[{ id:'techRocketFuel', count:1 }], machineId:'machineAssembler2', recipeId:'recipeRocketFuel' },
                {	id:'lineRocketFuel2',       type:'line',	    reqs:[{ id:'techRocketFuel', count:1 }], machineId:'machineAssembler3', recipeId:'recipeRocketFuel' },
                //---
                {	id:'itemSulfuricAcid',      type:'item',	    cat:'level3', reqs:[{ id:'techSulfur', count:1 }], label:'itemSulfuricAcid', img:'img/items/SulfuricAcid.png', storage:{ base:50, storerId:'storerBarrel' }, recipeId:'recipeSulfuricAcid', lines:[ 'lineSulfuricAcid' ] },
                {	id:'recipeSulfuricAcid',	type:'recipe',	    reqs:[{ id:'techSulfur', count:1 }], time:1, output:{ id:'itemSulfuricAcid', count:50 }, inputs:[{ id:'itemIronPlate', count:1 },{ id:'itemSulfur', count:5 },{ id:'itemWater', count:100 }] },
                {	id:'lineSulfuricAcid',      type:'line',	    reqs:[{ id:'techSulfur', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeSulfuricAcid' },

                // Level 4
                //---
                {	id:'itemEngine2',           type:'item',	    cat:'level4', reqs:[{ id:'techEngine2', count:1 }], label:'itemEngine2', img:'img/items/Engine2.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeEngine2', lines:[ 'lineEngine21','lineEngine22' ] },
                {	id:'recipeEngine2',	        type:'recipe',	    reqs:[{ id:'techEngine2', count:1 }], time:10, output:{ id:'itemEngine2', count:1 }, inputs:[{ id:'itemCopperPlate', count:3 },{ id:'itemEngine1', count:1 },{ id:'itemIronPlate', count:2 },{ id:'itemLubricant', count:15 }] },
                {	id:'lineEngine21',          type:'line',	    reqs:[{ id:'techEngine2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeEngine2' },
                {	id:'lineEngine22',          type:'line',	    reqs:[{ id:'techEngine2', count:1 }], machineId:'machineAssembler3', recipeId:'recipeEngine2' },
                //---
                {	id:'itemCircuit3',          type:'item',	    cat:'level4', reqs:[{ id:'techElectronics3', count:1 }], label:'itemCircuit', img:'img/items/Circuit3.png', storage:{ base:100, storerId:'storerChest' }, recipeId:'recipeCircuit3', lines:[ 'lineCircuit31','lineCircuit32' ] },
                {	id:'recipeCircuit3',	    type:'recipe',	    reqs:[{ id:'techElectronics3', count:1 }], time:10, output:{ id:'itemCircuit3', count:1 }, inputs:[{ id:'itemCopperPlate', count:40 },{ id:'itemIronPlate', count:24 },{ id:'itemPlastic', count:4 },{ id:'itemSulfuricAcid', count:5 }] },
                {	id:'lineCircuit31',         type:'line',	    reqs:[{ id:'techElectronics3', count:1 }], machineId:'machineAssembler2', recipeId:'recipeCircuit3' },
                {	id:'lineCircuit32',         type:'line',	    reqs:[{ id:'techElectronics3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeCircuit3' },
                //---
                {	id:'itemBattery',	        type:'item',	    cat:'level4', reqs:[{ id:'techBattery', count:1 }], label:'itemBattery', img:'img/items/Battery.png', storage:{ base:200, storerId:'storerChest' }, recipeId:'recipeBattery', lines:[ 'lineBattery1' ] },
                {	id:'recipeBattery',	        type:'recipe',	    reqs:[{ id:'techBattery', count:1 }], time:4, output:{ id:'itemBattery', count:1 }, inputs:[{ id:'itemCopperPlate', count:1 },{ id:'itemIronPlate', count:1 },{ id:'itemSulfuricAcid', count:20 }] },
                {	id:'lineBattery1',          type:'line',	    reqs:[{ id:'techBattery', count:1 },{ id:'techOil1', count:1 }], machineId:'machineChemicalPlant', recipeId:'recipeBattery' },

                // Level 5
                //---
                {	id:'itemRocketPart',        type:'item',	    cat:'level5', reqs:[{ id:'techRocket', count:1 }], label:'itemRocketPart', img:'img/items/RocketPart.png', storage:{ base:5, storerId:'storerChest' }, recipeId:'recipeRocketPart', lines:[ 'lineRocketPart' ] },
                {	id:'recipeRocketPart',	    type:'recipe',	    reqs:[{ id:'techRocket', count:1 }], time:3, output:{ id:'itemRocketPart', count:1 }, inputs:[{ id:'itemCopperPlate', count:525 },{ id:'itemIronPlate', count:150 },{ id:'itemPlastic', count:150 },{ id:'itemCircuit3', count:10 },{ id:'itemRocketFuel', count:10 },{ id:'itemSteel', count:20 }] },
                {	id:'lineRocketPart',        type:'line',	    reqs:[{ id:'techRocket', count:1 }], machineId:'machineRocketSilo', recipeId:'recipeRocketPart' },
                //---
                {	id:'itemArmor',		        type:'item',	    cat:'level5', reqs:[{ id:'techArmor', count:1 }], label:'itemArmor', img:'img/items/Armor.png', storage:{ base:1 }, recipeId:'recipeArmor', lines:[ 'manualArmor' ] },
                {	id:'recipeArmor',	        type:'recipe',	    reqs:[{ id:'techArmor', count:1 }], time:25, output:{ id:'itemArmor', count:1 }, inputs:[{ id:'itemCopperPlate', count:8400 },{ id:'itemEngine2', count:40 },{ id:'itemIronPlate', count:3500 },{ id:'itemPlastic', count:2700 },{ id:'itemCircuit3', count:310 },{ id:'itemSteel', count:60 }] },
                {	id:'manualArmor',           type:'line',        reqs:[{ id:'techArmor', count:1 }], machineId:'machineManual', recipeId:'recipeArmor' },
                //---
                {	id:'itemSatellite',		    type:'item',        cat:'level5', reqs:[{ id:'techSpace', count:1 }], label:'itemSatellite', img:'img/items/Satellite.png', storage:{ base:1 }, recipeId:'recipeSatellite', lines:[ 'manualSatellite' ] },
                {	id:'recipeSatellite',	    type:'recipe',	    reqs:[{ id:'techSpace', count:1 }], time:5, output:{ id:'itemSatellite', count:1 }, inputs:[{ id:'itemBattery', count:500 },{ id:'itemCopperPlate', count:4800 },{ id:'itemIronPlate', count:1800 },{ id:'itemPlastic', count:500 },{ id:'itemCircuit3', count:100 },{ id:'itemRocketFuel', count:50 },{ id:'itemSteel', count:700 }] },
                {	id:'manualSatellite',       type:'line',        reqs:[{ id:'techSpace', count:1 }], machineId:'machineManual', recipeId:'recipeSatellite' },

                // Science packs
                //---
                {	id:'itemRedPack',           type:'item',	    cat:'science', label:'itemRedPack', img:'img/items/RedPack.png', storage:{ base:200, storerId:'storerChest' }, recipeId:'recipeRedPack', lines:[ 'manualRedPack', 'lineRedPack' ] },
                {	id:'recipeRedPack',	        type:'recipe',	    time:5, output:{ id:'itemRedPack', count:1 }, inputs:[{ id:'itemCopperPlate', count:1 },{ id:'itemIronPlate', count:2 }] },
                {	id:'manualRedPack',         type:'line',        machineId:'machineManual', recipeId:'recipeRedPack' },
                {	id:'lineRedPack',           type:'line',	    machineId:'machineLab', recipeId:'recipeRedPack' },
                //---
                {	id:'itemGreenPack',         type:'item',	    cat:'science', reqs:[{ id:'techGreen', count:1 }], label:'itemGreenPack', img:'img/items/GreenPack.png', storage:{ base:200, storerId:'storerChest' }, recipeId:'recipeGreenPack', lines:[ 'manualGreenPack', 'lineGreenPack' ] },
                {	id:'recipeGreenPack',	    type:'recipe',	    reqs:[{ id:'techGreen', count:1 }], time:6, output:{ id:'itemGreenPack', count:1 }, inputs:[{ id:'itemCopperPlate', count:2 },{ id:'itemIronPlate', count:6 }] },
                {	id:'manualGreenPack',       type:'line',        reqs:[{ id:'techGreen', count:1 }], machineId:'machineManual', recipeId:'recipeGreenPack' },
                {	id:'lineGreenPack',         type:'line',	    reqs:[{ id:'techGreen', count:1 }], machineId:'machineLab', recipeId:'recipeGreenPack' },
                //---
                {	id:'itemBluePack',          type:'item',	    cat:'science', reqs:[{ id:'techBlue', count:1 }], label:'itemBluePack', img:'img/items/BluePack.png', storage:{ base:200, storerId:'storerChest' }, recipeId:'recipeBluePack', lines:[ 'manualBluePack', 'lineBluePack' ] },
                {	id:'recipeBluePack',	    type:'recipe',	    reqs:[{ id:'techBlue', count:1 }], time:24, output:{ id:'itemBluePack', count:2 }, inputs:[{ id:'itemCopperPlate', count:15 },{ id:'itemEngine1', count:2 },{ id:'itemIronPlate', count:6 },{ id:'itemPlastic', count:6 },{ id:'itemSulfur', count:1 }] },
                {	id:'manualBluePack',        type:'line',        reqs:[{ id:'techBlue', count:1 }], machineId:'machineManual', recipeId:'recipeBluePack' },
                {	id:'lineBluePack',          type:'line',	    reqs:[{ id:'techBlue', count:1 }], machineId:'machineLab', recipeId:'recipeBluePack' },
                //---
                {	id:'itemPurplePack',        type:'item',	    cat:'science', reqs:[{ id:'techPurple', count:1 }], label:'itemPurplePack', img:'img/items/PurplePack.png', storage:{ base:200, storerId:'storerChest' }, recipeId:'recipePurplePack', lines:[ 'manualPurplePack', 'linePurplePack' ] },
                {	id:'recipePurplePack',	    type:'recipe',	    reqs:[{ id:'techPurple', count:1 }], time:21, output:{ id:'itemPurplePack', count:3 }, inputs:[{ id:'itemCopperPlate', count:58 },{ id:'itemIronPlate', count:33 },{ id:'itemPlastic', count:20 },{ id:'itemSteel', count:25 },{ id:'itemStone', count:15 },{ id:'itemBrick', count:10 }] },
                {	id:'manualPurplePack',      type:'line',        reqs:[{ id:'techPurple', count:1 }], machineId:'machineManual', recipeId:'recipePurplePack' },
                {	id:'linePurplePack',        type:'line',	    reqs:[{ id:'techPurple', count:1 }], machineId:'machineLab', recipeId:'recipePurplePack' },
                //---
                {	id:'itemYellowPack',        type:'item',	    cat:'science', reqs:[{ id:'techYellow', count:1 }], label:'itemYellowPack', img:'img/items/YellowPack.png', storage:{ base:200, storerId:'storerChest' }, recipeId:'recipeYellowPack', lines:[ 'manualYellowPack', 'lineYellowPack' ] },
                {	id:'recipeYellowPack',	    type:'recipe',	    reqs:[{ id:'techYellow', count:1 }], time:21, output:{ id:'itemYellowPack', count:3 }, inputs:[{ id:'itemBattery', count:2 },{ id:'itemCopperPlate', count:65 },{ id:'itemEngine2', count:1 },{ id:'itemIronPlate', count:3 },{ id:'itemPlastic', count:15 },{ id:'itemCircuit3', count:2 },{ id:'itemSteel', count:7 }] },
                {	id:'manualYellowPack',      type:'line',        reqs:[{ id:'techYellow', count:1 }], machineId:'machineManual', recipeId:'recipeYellowPack' },
                {	id:'lineYellowPack',        type:'line',	    reqs:[{ id:'techYellow', count:1 }], machineId:'machineLab', recipeId:'recipeYellowPack' },
                
                // Machines
                //---
                {	id:'machineManual',	        type:'item',	    label:'machineManual', img:'img/machines/Manual.png', storage:{ base:1 }, speed:0.25, initCount:1 },
                //---
                {	id:'machineFurnace1',	    type:'item',	    cat:'machine', label:'machineFurnace1', img:'img/machines/Furnace1.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeFurnace1', lines:[ 'manualFurnace1', 'lineFurnace11', 'lineFurnace12', 'lineFurnace13' ], speed:0.25, energy:{ id:'itemCoal', count:0.02 } },
                {	id:'recipeFurnace1',	    type:'recipe',	    time:2, output:{ id:'machineFurnace1', count:1 }, inputs:[{ id:'itemStone', count:5 }] },
                {	id:'manualFurnace1',	    type:'line',        machineId:'machineManual', recipeId:'recipeFurnace1' },
                {	id:'lineFurnace11',         type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeFurnace1' },
                {	id:'lineFurnace12',         type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeFurnace1' },
                {	id:'lineFurnace13',         type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeFurnace1' },
                //---
                {	id:'machineFurnace2',	    type:'item',	    cat:'machine', reqs:[{ id:'techMaterial1', count:1 }], label:'machineFurnace2', storage:{ base:50, storerId:'storerChest' }, img:'img/machines/Furnace2.png', recipeId:'recipeFurnace2', lines:[ 'manualFurnace2', 'lineFurnace21', 'lineFurnace22', 'lineFurnace23' ], speed:0.5, energy:{ id:'itemCoal', count:0.03 } },
                {	id:'recipeFurnace2',	    type:'recipe',	    reqs:[{ id:'techMaterial1', count:1 }], time:3, output:{ id:'machineFurnace2', count:1 }, inputs:[{ id:'itemBrick', count:10 },{ id:'itemSteel', count:6 }] },
                {	id:'manualFurnace2',	    type:'line',        reqs:[{ id:'techMaterial1', count:1 }], machineId:'machineManual', recipeId:'recipeFurnace2' },
                {	id:'lineFurnace21',         type:'line',	    reqs:[{ id:'techMaterial1', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeFurnace2' },
                {	id:'lineFurnace22',         type:'line',	    reqs:[{ id:'techMaterial1', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeFurnace2' },
                {	id:'lineFurnace23',         type:'line',	    reqs:[{ id:'techMaterial1', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeFurnace2' },
                //---
                {	id:'machineFurnace3',	    type:'item',	    cat:'machine', reqs:[{ id:'techMaterial2', count:1 }], label:'machineFurnace3', storage:{ base:50, storerId:'storerChest' }, img:'img/machines/Furnace3.png', recipeId:'recipeFurnace3', lines:[ 'manualFurnace3', 'lineFurnace31', 'lineFurnace32', 'lineFurnace33' ], speed:2, energy:{ id:'itemElectricity', count:90 } },
                {	id:'recipeFurnace3',	    type:'recipe',	    reqs:[{ id:'techMaterial2', count:1 }], time:5, output:{ id:'machineFurnace3', count:1 }, inputs:[{ id:'itemBrick', count:10 },{ id:'itemSteel', count:10 },{ id:'itemPlastic', count:10 },{ id:'itemIronPlate', count:10 },{ id:'itemCopperPlate', count:25 }] },
                {	id:'manualFurnace3',	    type:'line',        reqs:[{ id:'techMaterial2', count:1 }], machineId:'machineManual', recipeId:'recipeFurnace3' },
                {	id:'lineFurnace31',         type:'line',	    reqs:[{ id:'techMaterial2', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeFurnace3' },
                {	id:'lineFurnace32',         type:'line',	    reqs:[{ id:'techMaterial2', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeFurnace3' },
                {	id:'lineFurnace33',         type:'line',	    reqs:[{ id:'techMaterial2', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeFurnace3' },
                //---
                {	id:'machineMinerCoal',	    type:'item',	    cat:'machine', label:'machineMinerCoal', img:'img/machines/DrillCoal.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeMinerCoal', lines:[ 'manualMinerCoal', 'lineMinerCoal1', 'lineMinerCoal2', 'lineMinerCoal3' ], speed:0.25 },
                {	id:'recipeMinerCoal',	    type:'recipe',	    time:2, output:{ id:'machineMinerCoal', count:1 }, inputs:[{ id:'itemStone', count:5 }] },
                {	id:'manualMinerCoal',	    type:'line',        machineId:'machineManual', recipeId:'recipeMinerCoal' },
                {	id:'lineMinerCoal1',        type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeMinerCoal' },
                {	id:'lineMinerCoal2',        type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeMinerCoal' },
                {	id:'lineMinerCoal3',        type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeMinerCoal' },
                //---
                {	id:'machineMiner1',	        type:'item',	    cat:'machine', label:'machineMiner1', img:'img/machines/Drill1.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeMiner1', lines:[ 'manualMiner1', 'lineMiner11', 'lineMiner12', 'lineMiner13' ], speed:0.25, energy:{ id:'itemCoal', count:0.04 } },
                {	id:'recipeMiner1',	        type:'recipe',	    time:2, output:{ id:'machineMiner1', count:1 }, inputs:[{ id:'itemIronPlate', count:9 },{ id:'itemStone', count:5 }] },
                {	id:'manualMiner1',	        type:'line',        machineId:'machineManual', recipeId:'recipeMiner1' },
                {	id:'lineMiner11',           type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeMiner1' },
                {	id:'lineMiner12',           type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeMiner1' },
                {	id:'lineMiner13',           type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeMiner1' },
                //---
                {	id:'machineMiner2',	        type:'item',	    cat:'machine', label:'machineMiner2', img:'img/machines/Drill2.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeMiner2', lines:[ 'manualMiner2', 'lineMiner21', 'lineMiner22', 'lineMiner23' ], speed:1.5, energy:{ id:'itemElectricity', count:90 } },
                {	id:'recipeMiner2',	        type:'recipe',	    time:2, output:{ id:'machineMiner2', count:1 }, inputs:[{ id:'itemCopperPlate', count:5 },{ id:'itemIronPlate', count:23 }] },
                {	id:'manualMiner2',	        type:'line',        machineId:'machineManual', recipeId:'recipeMiner2' },
                {	id:'lineMiner21',           type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeMiner2' },
                {	id:'lineMiner22',           type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeMiner2' },
                {	id:'lineMiner23',           type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeMiner2' },
                //---
                {	id:'machinePump',           type:'item',	    cat:'machine', label:'machinePump', img:'img/machines/Pump.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipePump', lines:[ 'manualPump', 'linePump1', 'linePump2', 'linePump3' ], speed:1 },
                {	id:'recipePump',	        type:'recipe',	    time:1, output:{ id:'machinePump', count:1 }, inputs:[{ id:'itemCopperPlate', count:3 },{ id:'itemIronPlate', count:5 }] },
                {	id:'manualPump',            type:'line',        machineId:'machineManual', recipeId:'recipePump' },
                {	id:'linePump1',             type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipePump' },
                {	id:'linePump2',             type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipePump' },
                {	id:'linePump3',             type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipePump' },
                //---
                {	id:'machineBoiler',	        type:'item',	    cat:'machine', label:'machineBoiler', img:'img/machines/Boiler.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeBoiler', lines:[ 'manualBoiler', 'lineBoiler1', 'lineBoiler2', 'lineBoiler3' ], speed:1, energy:{ id:'itemCoal', count:0.45 } },
                {	id:'recipeBoiler',	        type:'recipe',	    time:1, output:{ id:'machineBoiler', count:1 }, inputs:[{ id:'itemBrick', count:5 },{ id:'itemIronPlate', count:4 }] },
                {	id:'manualBoiler',	        type:'line',        machineId:'machineManual', recipeId:'recipeBoiler' },
                {	id:'lineBoiler1',           type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeBoiler' },
                {	id:'lineBoiler2',           type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeBoiler' },
                {	id:'lineBoiler3',           type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeBoiler' },
                //---
                {	id:'machineLab',	        type:'item',	    cat:'machine', label:'machineLab', img:'img/machines/Lab.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeLab', lines:[ 'manualLab', 'lineLab1', 'lineLab2', 'lineLab3' ], speed:1, energy:{ id:'itemElectricity', count:60 } },
                {	id:'recipeLab',	            type:'recipe',	    time:2, output:{ id:'machineLab', count:1 }, inputs:[{ id:'itemCopperPlate', count:15 },{ id:'itemIronPlate', count:36 }] },
                {	id:'manualLab',	            type:'line',        machineId:'machineManual', recipeId:'recipeLab' },
                {	id:'lineLab1',              type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeLab' },
                {	id:'lineLab2',              type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeLab' },
                {	id:'lineLab3',              type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeLab' },
                //---
                {	id:'machinePumpjack',       type:'item',	    cat:'machine', reqs:[{ id:'techOil1', count:1 }], label:'machinePumpjack', img:'img/machines/Pumpjack.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipePumpjack', lines:[ 'manualPumpjack', 'linePumpjack1', 'linePumpjack2', 'linePumpjack3' ], speed:1, energy:{ id:'itemElectricity', count:90 } },
                {	id:'recipePumpjack',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, output:{ id:'machinePumpjack', count:1 }, inputs:[{ id:'itemCopperPlate', count:8 },{ id:'itemIronPlate', count:35 },{ id:'itemSteel', count:5 }] },
                {	id:'manualPumpjack',        type:'line',        reqs:[{ id:'techOil1', count:1 }], machineId:'machineManual', recipeId:'recipePumpjack' },
                {	id:'linePumpjack1',         type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipePumpjack' },
                {	id:'linePumpjack2',         type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipePumpjack' },
                {	id:'linePumpjack3',         type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipePumpjack' },
                //---
                {	id:'machineAssembler1',     type:'item',	    cat:'machine', reqs:[{ id:'techAutomation1', count:1 }], label:'machineAssembler1', img:'img/machines/Assembler1.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeAssembler1', lines:[ 'manualAssembler1', 'lineAssembler11', 'lineAssembler12', 'lineAssembler13' ], speed:0.5, energy:{ id:'itemElectricity', count:75 } },
                {	id:'recipeAssembler1',	    type:'recipe',	    reqs:[{ id:'techAutomation1', count:1 }], time:1, output:{ id:'machineAssembler1', count:1 }, inputs:[{ id:'itemCopperPlate', count:5 },{ id:'itemIronPlate', count:22 }] },
                {	id:'manualAssembler1',      type:'line',        reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineManual', recipeId:'recipeAssembler1' },
                {	id:'lineAssembler11',       type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeAssembler1' },
                {	id:'lineAssembler12',       type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeAssembler1' },
                {	id:'lineAssembler13',       type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeAssembler1' },
                //---
                {	id:'machineAssembler2',     type:'item',	    cat:'machine', reqs:[{ id:'techAutomation2', count:1 }], label:'machineAssembler2', img:'img/machines/Assembler2.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeAssembler2', lines:[ 'manualAssembler2', 'lineAssembler21', 'lineAssembler22', 'lineAssembler23' ], speed:0.75, energy:{ id:'itemElectricity', count:100 } },
                {	id:'recipeAssembler2',	    type:'recipe',	    reqs:[{ id:'techAutomation2', count:1 }], time:1, output:{ id:'machineAssembler2', count:1 }, inputs:[{ id:'itemCopperPlate', count:9 },{ id:'itemIronPlate', count:35 },{ id:'itemSteel', count:2 }] },
                {	id:'manualAssembler2',      type:'line',        reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineManual', recipeId:'recipeAssembler2' },
                {	id:'lineAssembler21',       type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeAssembler2' },
                {	id:'lineAssembler22',       type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeAssembler2' },
                {	id:'lineAssembler23',       type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeAssembler2' },
                //---
                {	id:'machineAssembler3',     type:'item',	    cat:'machine', reqs:[{ id:'techAutomation3', count:1 }], label:'machineAssembler3', img:'img/machines/Assembler3.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeAssembler3', lines:[ 'manualAssembler3', 'lineAssembler31', 'lineAssembler32', 'lineAssembler33' ], speed:1.25, energy:{ id:'itemElectricity', count:150 } },
                {	id:'recipeAssembler3',	    type:'recipe',	    reqs:[{ id:'techAutomation3', count:1 }], time:1, output:{ id:'machineAssembler3', count:1 }, inputs:[{ id:'itemCopperPlate', count:148 },{ id:'itemIronPlate', count:130 },{ id:'itemPlastic', count:40 },{ id:'itemSteel', count:4 }] },
                {	id:'manualAssembler3',      type:'line',        reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineManual', recipeId:'recipeAssembler3' },
                {	id:'lineAssembler31',       type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeAssembler3' },
                {	id:'lineAssembler32',       type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeAssembler3' },
                {	id:'lineAssembler33',       type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeAssembler3' },
                //---
                {	id:'machineChemicalPlant',  type:'item',	    cat:'machine', reqs:[{ id:'techOil1', count:1 }], label:'machineChemicalPlant', img:'img/machines/ChemicalPlant.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeChemicalPlant', lines:[ 'manualChemicalPlant', 'lineChemicalPlant1', 'lineChemicalPlant2', 'lineChemicalPlant3' ], speed:1, energy:{ id:'itemElectricity', count:210 } },
                {	id:'recipeChemicalPlant',	type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:5, output:{ id:'machineChemicalPlant', count:1 }, inputs:[{ id:'itemCopperPlate', count:8 },{ id:'itemIronPlate', count:20 },{ id:'itemSteel', count:5 }] },
                {	id:'manualChemicalPlant',   type:'line',        reqs:[{ id:'techOil1', count:1 }], machineId:'machineManual', recipeId:'recipeChemicalPlant' },
                {	id:'lineChemicalPlant1',    type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeChemicalPlant' },
                {	id:'lineChemicalPlant2',    type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeChemicalPlant' },
                {	id:'lineChemicalPlant3',    type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeChemicalPlant' },
                //---
                {	id:'machineRefinery',       type:'item',	    cat:'machine', reqs:[{ id:'techOil1', count:1 }], label:'machineRefinery', img:'img/machines/Refinery.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeRefinery', lines:[ 'manualRefinery', 'lineRefinery1', 'lineRefinery2', 'lineRefinery3' ], speed:1, energy:{ id:'itemElectricity', count:420 } },
                {	id:'recipeRefinery',	    type:'recipe',	    reqs:[{ id:'techOil1', count:1 }], time:8, output:{ id:'machineRefinery', count:1 }, inputs:[{ id:'itemCopperPlate', count:15 },{ id:'itemIronPlate', count:40 },{ id:'itemSteel', count:15 },{ id:'itemBrick', count:10 }] },
                {	id:'manualRefinery',	    type:'line',        reqs:[{ id:'techOil1', count:1 }], machineId:'machineManual', recipeId:'recipeRefinery' },
                {	id:'lineRefinery1',         type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeRefinery' },
                {	id:'lineRefinery2',         type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeRefinery' },
                {	id:'lineRefinery3',         type:'line',	    reqs:[{ id:'techOil1', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeRefinery' },
                //---
                {	id:'machineNuclearPlant',   type:'item',	    cat:'machine', reqs:[{ id:'techNuclear', count:1 }], label:'machineNuclearPlant', img:'img/machines/NuclearPlant.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeNuclearPlant', lines:[ 'manualNuclearPlant', 'lineNuclearPlant1', 'lineNuclearPlant2', 'lineNuclearPlant3' ], speed:10, energy:{ id:'itemUraniumFuel', count:0.005 } },
                {	id:'recipeNuclearPlant',    type:'recipe',	    reqs:[{ id:'techNuclear', count:1 }], time:8, output:{ id:'machineNuclearPlant', count:1 }, inputs:[{ id:'itemConcrete', count:500 },{ id:'itemCopperPlate', count:3e3 },{ id:'itemIronPlate', count:1e3 },{ id:'itemPlastic', count:1e3 },{ id:'itemSteel', count:500 }] },
                {	id:'manualNuclearPlant',	type:'line',        reqs:[{ id:'techNuclear', count:1 }], machineId:'machineManual', recipeId:'recipeNuclearPlant' },
                {	id:'lineNuclearPlant1',     type:'line',	    reqs:[{ id:'techNuclear', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeNuclearPlant' },
                {	id:'lineNuclearPlant2',     type:'line',	    reqs:[{ id:'techNuclear', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeNuclearPlant' },
                {	id:'lineNuclearPlant3',     type:'line',	    reqs:[{ id:'techNuclear', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeNuclearPlant' },
                //---
                {	id:'machineRocketSilo',     type:'item',	    cat:'machine', reqs:[{ id:'techRocket', count:1 }], label:'machineRocketSilo', img:'img/machines/RocketSilo.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeRocketSilo', lines:[ 'manualRocketSilo', 'lineRocketSilo1', 'lineRocketSilo2', 'lineRocketSilo3' ], speed:1, energy:{ id:'itemElectricity', count:4e3 } },
                {	id:'recipeRocketSilo',	    type:'recipe',	    reqs:[{ id:'techRocket', count:1 }], time:30, output:{ id:'machineRocketSilo', count:1 }, inputs:[{ id:'itemConcrete', count:1e3 },{ id:'itemEngine2', count:200 },{ id:'itemIronPlate', count:100 },{ id:'itemCircuit3', count:200 },{ id:'itemSteel', count:1e3 }] },
                {	id:'manualRocketSilo',	    type:'line',        reqs:[{ id:'techRocket', count:1 }], machineId:'machineManual', recipeId:'recipeRocketSilo' },
                {	id:'lineRocketSilo1',       type:'line',	    reqs:[{ id:'techRocket', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeRocketSilo' },
                {	id:'lineRocketSilo2',       type:'line',	    reqs:[{ id:'techRocket', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeRocketSilo' },
                {	id:'lineRocketSilo3',       type:'line',	    reqs:[{ id:'techRocket', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeRocketSilo' },
                
                // Storers
                //---
                {	id:'storerChest',	        type:'item',	    cat:'storer', label:'storerChest', img:'img/storers/Chest.png', storage:{ base:75, storerId:'storerChest' }, recipeId:'recipeChest', lines:[ 'manualChest', 'lineChest1', 'lineChest2', 'lineChest3' ] },
                {	id:'recipeChest',	        type:'recipe',	    time:1, output:{ id:'storerChest', count:1 }, inputs:[{ id:'itemSteel', count:8 }] },
                {	id:'manualChest',	        type:'line',        machineId:'machineManual', recipeId:'recipeChest' },
                {	id:'lineChest1',            type:'line',	    reqs:[{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeChest' },
                {	id:'lineChest2',            type:'line',	    reqs:[{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeChest' },
                {	id:'lineChest3',            type:'line',	    reqs:[{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeChest' },
                //---
                {	id:'storerBarrel',          type:'item',	    cat:'storer', reqs:[{ id:'techFluid', count:1 }], label:'storerBarrel', img:'img/storers/Barrel.png', storage:{ base:10, storerId:'storerChest' }, recipeId:'recipeBarrel', lines:[ 'manualBarrel', 'lineBarrel1', 'lineBarrel2', 'lineBarrel3' ] },
                {	id:'recipeBarrel',          type:'recipe',	    reqs:[{ id:'techFluid', count:1 }], time:1, output:{ id:'storerBarrel', count:1 }, inputs:[{ id:'itemSteel', count:1 }] },
                {	id:'manualBarrel',          type:'line',        reqs:[{ id:'techFluid', count:1 }], machineId:'machineManual', recipeId:'recipeBarrel' },
                {	id:'lineBarrel1',           type:'line',	    reqs:[{ id:'techFluid', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeBarrel' },
                {	id:'lineBarrel2',           type:'line',	    reqs:[{ id:'techFluid', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeBarrel' },
                {	id:'lineBarrel3',           type:'line',	    reqs:[{ id:'techFluid', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeBarrel' },
                //---
                {	id:'storerTank',            type:'item',	    cat:'storer', reqs:[{ id:'techFluid', count:1 }], label:'storerTank', img:'img/storers/Tank.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeTank', lines:[ 'manualTank', 'lineTank1', 'lineTank2', 'lineTank3' ] },
                {	id:'recipeTank',            type:'recipe',	    reqs:[{ id:'techFluid', count:1 }], time:3, output:{ id:'storerTank', count:1 }, inputs:[{ id:'itemIronPlate', count:20 },{ id:'itemSteel', count:5 }] },
                {	id:'manualTank',            type:'line',        reqs:[{ id:'techFluid', count:1 }], machineId:'machineManual', recipeId:'recipeTank' },
                {	id:'lineTank1',             type:'line',	    reqs:[{ id:'techFluid', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeTank' },
                {	id:'lineTank2',             type:'line',	    reqs:[{ id:'techFluid', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeTank' },
                {	id:'lineTank3',             type:'line',	    reqs:[{ id:'techFluid', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeTank' },
                //---
                {	id:'storerAccumulator',     type:'item',	    cat:'storer', reqs:[{ id:'techAccumulator', count:1 }], label:'storerAccumulator', img:'img/storers/Accumulator.png', storage:{ base:50, storerId:'storerChest' }, recipeId:'recipeAccumulator', lines:[ 'manualAccumulator', 'lineAccumulator1', 'lineAccumulator2', 'lineAccumulator3' ] },
                {	id:'recipeAccumulator',     type:'recipe',	    reqs:[{ id:'techAccumulator', count:1 }], time:10, output:{ id:'storerAccumulator', count:1 }, inputs:[{ id:'itemBattery', count:5 },{ id:'itemIronPlate', count:2 }] },
                {	id:'manualAccumulator',     type:'line',        reqs:[{ id:'techAccumulator', count:1 }], machineId:'machineManual', recipeId:'recipeAccumulator' },
                {	id:'lineAccumulator1',      type:'line',	    reqs:[{ id:'techAccumulator', count:1 },{ id:'techAutomation1', count:1 }], machineId:'machineAssembler1', recipeId:'recipeAccumulator' },
                {	id:'lineAccumulator2',      type:'line',	    reqs:[{ id:'techAccumulator', count:1 },{ id:'techAutomation2', count:1 }], machineId:'machineAssembler2', recipeId:'recipeAccumulator' },
                {	id:'lineAccumulator3',      type:'line',	    reqs:[{ id:'techAccumulator', count:1 },{ id:'techAutomation3', count:1 }], machineId:'machineAssembler3', recipeId:'recipeAccumulator' },
            ]
        }},
        //---
        { id:'satisfactory1', label:'scenario_satisfactory1', desc:'scenarioDesc_satisfactory1', ready:true, data:{
            //---
            victoryReqs:[{ id:'satisfactory1Space4', count:1 }],
            //---
            catMissions:[ 'mission' ],
            catItems:[ 'machine', 'storer', 'energy', 'raw', 'level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7', 'level8', 'level9' ],
            //---
            elems:[
            
                // Missions
                //---
                {	id:'satisfactory1T0M1',	                type:'item',	    cat:'mission', label:'satisfactory1T0M1', desc:'satisfactory1T0M1Desc', costs:[{ id:'itemIronRod', count:10 }], rewards:[{ id:'machineMiner0', count:1 }] },
                {	id:'satisfactory1T0M2',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1T0M1', count:1 }], label:'satisfactory1T0M2', costs:[{ id:'itemIronRod', count:20 },{ id:'itemIronPlate', count:10 }], rewards:[{ id:'machineMiner0', count:1 },{ id:'machineBioBurner1', count:1 }] },
                {	id:'satisfactory1T0M3',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'satisfactory1T0M3', costs:[{ id:'itemIronRod', count:20 },{ id:'itemIronPlate', count:20 },{ id:'itemWire', count:20 }] },
                {	id:'satisfactory1T0M4',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1T0M3', count:1 }], label:'satisfactory1T0M4', costs:[{ id:'itemIronRod', count:75 },{ id:'itemCable', count:50 },{ id:'itemConcrete', count:20 }], rewards:[{ id:'machineBioBurner1', count:1 }] },
                {	id:'satisfactory1T0M5',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1T0M4', count:1 }], label:'satisfactory1T0M5', costs:[{ id:'itemIronRod', count:100 },{ id:'itemIronPlate', count:100 },{ id:'itemWire', count:100 },{ id:'itemConcrete', count:50 }] },                
                //---
                {	id:'satisfactory1Space0',	            type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1T0M5', count:1 }], label:'satisfactory1Space0', costs:[{ id:'itemConcrete', count:500 },{ id:'itemIronPlate', count:250 },{ id:'itemIronRod', count:400 },{ id:'itemWire', count:1500 }] },                
                //---
                {	id:'satisfactory1T2M1',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space0', count:1 }], label:'satisfactory1T2M1', costs:[{ id:'itemIronRod', count:200 },{ id:'itemCable', count:200 },{ id:'itemScrew', count:500 },{ id:'itemIronPlate', count:300 }] },
                //---
                {	id:'satisfactory1Space1',	            type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1T2M1', count:1 }], label:'satisfactory1Space1', costs:[{ id:'itemSmartPlating', count:50 }] },
                //---
                {	id:'satisfactory1T3M1',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space1', count:1 }], label:'satisfactory1T3M1', costs:[{ id:'itemReinforcedPlate', count:150 },{ id:'itemRotor', count:50 },{ id:'itemCable', count:300 }] },
                {	id:'satisfactory1T3M3',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space1', count:1 }], label:'satisfactory1T3M3', costs:[{ id:'itemModularFrame', count:50 },{ id:'itemRotor', count:150 },{ id:'itemConcrete', count:300 },{ id:'itemWire', count:1000 }] },
                {	id:'satisfactory1T4M1',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space1', count:1 }], label:'satisfactory1T4M1', costs:[{ id:'itemSteelPipe', count:200 },{ id:'itemRotor', count:200 },{ id:'itemWire', count:1500 },{ id:'itemConcrete', count:300 }] },
                //---
                {	id:'satisfactory1Space2',	            type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space1', count:1 }], label:'satisfactory1Space2', costs:[{ id:'itemSmartPlating', count:500 },{ id:'itemVersatileFramework', count:500 },{ id:'itemAutomatedWiring', count:100 }] },
                //---
                {	id:'satisfactory1T5M1',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space2', count:1 }], label:'satisfactory1T5M1', costs:[{ id:'itemMotor', count:50 },{ id:'itemIndustrialBeam', count:100 },{ id:'itemSteelPipe', count:500 },{ id:'itemCopperSheet', count:500 }] },
                {	id:'satisfactory1T5M2',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space2', count:1 }], label:'satisfactory1T5M2', costs:[{ id:'itemMotor', count:100 },{ id:'itemPlastic', count:200 },{ id:'itemRubber', count:200 },{ id:'itemCable', count:1000 }] },
                {	id:'satisfactory1T6M1',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space2', count:1 }], label:'satisfactory1T6M1', costs:[{ id:'itemHeavyModularFrame', count:50 },{ id:'itemComputer', count:100 },{ id:'itemIndustrialBeam', count:200 },{ id:'itemRubber', count:400 }] },
                //---
                {	id:'satisfactory1Space3',	            type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space2', count:1 }], label:'satisfactory1Space3', costs:[{ id:'itemVersatileFramework', count:2500 },{ id:'itemModularEngine', count:500 },{ id:'itemAdaptiveControlUnit', count:100 }] },
                //---
                {	id:'satisfactory1T7M1',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space3', count:1 }], label:'satisfactory1T7M1', costs:[{ id:'itemComputer', count:50 },{ id:'itemHeavyModularFrame', count:100 },{ id:'itemMotor', count:200 },{ id:'itemRubber', count:500 }] },
                {	id:'satisfactory1T7M3',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space3', count:1 }], label:'satisfactory1T7M3', costs:[{ id:'itemRadioControlUnit', count:50 },{ id:'itemAlcladAluminumSheet', count:100 },{ id:'itemAluminumCasing', count:200 },{ id:'itemMotor', count:300 }] },
                {	id:'satisfactory1T8M1',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space3', count:1 }], label:'satisfactory1T8M1', costs:[{ id:'itemSupercomputer', count:50 },{ id:'itemHeavyModularFrame', count:200 },{ id:'itemCable', count:1000 },{ id:'itemConcrete', count:2000 }] },
                {	id:'satisfactory1T8M2',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space3', count:1 }], label:'satisfactory1T8M2', costs:[{ id:'itemRadioControlUnit', count:50 },{ id:'itemAluminumCasing', count:200 },{ id:'itemAlcladAluminumSheet', count:200 },{ id:'itemWire', count:300 }] },
                {	id:'satisfactory1T8M3',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space3', count:1 }], label:'satisfactory1T8M3', costs:[{ id:'itemFusedModularFrame', count:50 },{ id:'itemSupercomputer', count:100 },{ id:'itemSteelPipe', count:1000 }] },
                {	id:'satisfactory1T8M4',	                type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space3', count:1 }], label:'satisfactory1T8M4', costs:[{ id:'itemElectromagneticControlRod', count:400 },{ id:'itemCoolingSystem', count:400 },{ id:'itemFusedModularFrame', count:200 },{ id:'itemTurboMotor', count:100 }] },
                //---
                {	id:'satisfactory1Space4',	            type:'item',	    cat:'mission', reqs:[{ id:'satisfactory1Space3', count:1 }], label:'satisfactory1Space4', costs:[{ id:'itemAssemblyDirectorSystem', count:4000 },{ id:'itemMagneticFieldGenerator', count:4000 },{ id:'itemNuclearPasta', count:1000 },{ id:'itemThermalPropulsionRocket', count:1000 }] },
                
                // Energy
                //---
                {	id:'machineBioBurner1',	                type:'item',	    cat:'energy',    reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'machineBioBurner1', img:'img/icons/generator_1.png', storage:{ base:2 }, speed:0.15 },
                //---
                {	id:'machineBioBurner2',	                type:'item',	    cat:'energy',    reqs:[{ id:'satisfactory1T0M5', count:1 }], label:'machineBioBurner2', img:'img/icons/generator_2.png', recipeId:'recipeBioBurner2', lines:[ 'manualBioBurner2' ], speed:0.3, energy:{ id:'itemBiomass', count:0.16 } },
                {	id:'recipeBioBurner2',	                type:'recipe',	                        reqs:[{ id:'satisfactory1T0M5', count:1 }], time:1, output:{ id:'machineBioBurner2', count:1 }, inputs:[{ id:'itemFoundation', count:1 },{ id:'itemIronRod', count:15 },{ id:'itemIronPlate', count:15 },{ id:'itemWire', count:25 }] },
                {	id:'manualBioBurner2',	                type:'line',                            reqs:[{ id:'satisfactory1T0M5', count:1 }], machineId:'machineManual', recipeId:'recipeBioBurner2' },
                //---
                {	id:'machineCoalGenerator',	            type:'item',	    cat:'energy',    reqs:[{ id:'satisfactory1T3M1', count:1 }], label:'machineCoalGenerator', img:'img/icons/generator_3.png', recipeId:'recipeCoalGenerator', lines:[ 'manualCoalGenerator' ], speed:0.5, energy:{ id:'itemCoal', count:0.25 } },
                {	id:'recipeCoalGenerator',	            type:'recipe',	                        reqs:[{ id:'satisfactory1T3M1', count:1 }], time:1, output:{ id:'machineCoalGenerator', count:1 }, inputs:[{ id:'itemFoundation', count:4 },{ id:'itemReinforcedPlate', count:20 },{ id:'itemRotor', count:10 },{ id:'itemCable', count:30 }] },
                {	id:'manualCoalGenerator',	            type:'line',                            reqs:[{ id:'satisfactory1T3M1', count:1 }], machineId:'machineManual', recipeId:'recipeCoalGenerator' },
                //---
                {	id:'machineFuelGenerator',	            type:'item',	    cat:'energy',    reqs:[{ id:'satisfactory1T6M1', count:1 }], label:'machineFuelGenerator', img:'img/icons/generator_4.png', recipeId:'recipeFuelGenerator', lines:[ 'manualFuelGenerator' ], speed:1, energy:{ id:'itemFuel', count:2.4 } },
                {	id:'recipeFuelGenerator',	            type:'recipe',	                        reqs:[{ id:'satisfactory1T6M1', count:1 }], time:1, output:{ id:'machineFuelGenerator', count:1 }, inputs:[{ id:'itemFoundation', count:6.25 },{ id:'itemComputer', count:5 },{ id:'itemHeavyModularFrame', count:10 },{ id:'itemMotor', count:15 },{ id:'itemRubber', count:50 },{ id:'itemQuickwire', count:50 }] },
                {	id:'manualFuelGenerator',	            type:'line',                            reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineManual', recipeId:'recipeFuelGenerator' },
                //---
                {	id:'machineNuclearPlant',	            type:'item',	    cat:'energy',    reqs:[{ id:'satisfactory1T8M1', count:1 }], label:'machineNuclearPlant', img:'img/icons/nuclear_plant.png', recipeId:'recipeNuclearPlant', lines:[ 'manualNuclearPlant' ], speed:16, energy:{ id:'itemUraniumFuelRod', count:0.01 } },
                {	id:'recipeNuclearPlant',	            type:'recipe',	                        reqs:[{ id:'satisfactory1T8M1', count:1 }], time:1, output:{ id:'machineNuclearPlant', count:1 }, inputs:[{ id:'itemFoundation', count:24 },{ id:'itemConcrete', count:250 },{ id:'itemHeavyModularFrame', count:25 },{ id:'itemSupercomputer', count:5 },{ id:'itemCable', count:100 },{ id:'itemAlcladAluminumSheet', count:100 }] },
                {	id:'manualNuclearPlant',	            type:'line',                            reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineManual', recipeId:'recipeNuclearPlant' },
                //---
                {	id:'itemElectricity',	                type:'item',        cat:'energy', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'itemElectricity', img:'img/icons/energy.png', storage:{ base:100, storerId:'storerPowerStorage' }, recipeId:'recipePower1', lines:[ 'linePower1', 'linePower2', 'linePower3', 'linePower4', 'linePower5' ] },
                {	id:'recipePower1',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:1, output:{ id:'itemElectricity', count:150 } },
                {	id:'linePower1',                        type:'line',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineBioBurner1', recipeId:'recipePower1' },
                {	id:'linePower2',                        type:'line',	    reqs:[{ id:'satisfactory1T0M5', count:1 }], machineId:'machineBioBurner2', recipeId:'recipePower1' },
                {	id:'linePower3',                        type:'line',	    reqs:[{ id:'satisfactory1T3M1', count:1 }], machineId:'machineCoalGenerator', recipeId:'recipePower1' },
                {	id:'linePower4',                        type:'line',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineFuelGenerator', recipeId:'recipePower1' },
                {	id:'linePower5',                        type:'line',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineNuclearPlant', recipeId:'recipePower1' },
                
                // Raw                
                //---
                {	id:'itemIron',	                        type:'item',        cat:'raw', label:'itemIron', img:'img/icons/item0_0.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeIron', lines:[ 'manualIron', 'lineIron0', 'lineIron1' ] },
                {	id:'recipeIron',	                    type:'recipe',	    time:1, output:{ id:'itemIron', count:1 } },
                {	id:'manualIron',	                    type:'line',        machineId:'machineManual', recipeId:'recipeIron' },
                {	id:'lineIron0',                         type:'line',	    reqs:[{ id:'satisfactory1T0M1', count:1 }], machineId:'machineMiner0', recipeId:'recipeIron' },
                {	id:'lineIron1',                         type:'line',	    reqs:[{ id:'satisfactory1T0M4', count:1 }], machineId:'machineMiner1', recipeId:'recipeIron' },
                //---
                {	id:'itemCopper',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'itemCopper', img:'img/icons/item0_1.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeCopper', lines:[ 'manualCopper', 'lineCopper0', 'lineCopper1' ] },
                {	id:'recipeCopper',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:1, output:{ id:'itemCopper', count:1 } },
                {	id:'manualCopper',	                    type:'line',        reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineManual', recipeId:'recipeCopper' },
                {	id:'lineCopper0',                       type:'line',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineMiner0', recipeId:'recipeCopper' },
                {	id:'lineCopper1',                       type:'line',	    reqs:[{ id:'satisfactory1T0M4', count:1 }], machineId:'machineMiner1', recipeId:'recipeCopper' },
                //---
                {	id:'itemStone',	                        type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'itemStone', img:'img/icons/item0_2.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeStone', lines:[ 'manualStone', 'lineStone0', 'lineStone1' ] },
                {	id:'recipeStone',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:1, output:{ id:'itemStone', count:1 } },
                {	id:'manualStone',	                    type:'line',        reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineManual', recipeId:'recipeStone' },
                {	id:'lineStone0',                        type:'line',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineMiner0', recipeId:'recipeStone' },
                {	id:'lineStone1',                        type:'line',	    reqs:[{ id:'satisfactory1T0M4', count:1 }], machineId:'machineMiner1', recipeId:'recipeStone' },
                //---
                {	id:'itemLeaves',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T0M5', count:1 }], label:'itemLeaves', img:'img/icons/item0_3.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeLeaves', lines:[ 'manualLeaves' ] },
                {	id:'recipeLeaves',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M5', count:1 }], time:1, output:{ id:'itemLeaves', count:4 } },
                {	id:'manualLeaves',	                    type:'line',        reqs:[{ id:'satisfactory1T0M5', count:1 }], machineId:'machineManual', recipeId:'recipeLeaves' },
                //---
                {	id:'itemWater',	                        type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T3M1', count:1 }], label:'itemWater', img:'img/icons/item0_4.png', storage:{ base:100, storerId:'storerFluidBuffer' }, recipeId:'recipeWater', lines:[ 'lineWater' ] },
                {	id:'recipeWater',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T3M1', count:1 }], time:1, output:{ id:'itemWater', count:1 } },
                {	id:'lineWater',                         type:'line',	    reqs:[{ id:'satisfactory1T3M1', count:1 }], machineId:'machinePump', recipeId:'recipeWater' },
                //---
                {	id:'itemCoal',	                        type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T3M1', count:1 }], label:'itemCoal', img:'img/icons/item0_5.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeCoal', lines:[ 'manualCoal', 'lineCoal' ] },
                {	id:'recipeCoal',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T3M1', count:1 }], time:1, output:{ id:'itemCoal', count:1 } },
                {	id:'manualCoal',	                    type:'line',        reqs:[{ id:'satisfactory1T3M1', count:1 }], machineId:'machineManual', recipeId:'recipeCoal' },
                {	id:'lineCoal',                          type:'line',	    reqs:[{ id:'satisfactory1T3M1', count:1 }], machineId:'machineConstructor', recipeId:'recipeCoal' },
                //---
                {	id:'itemOil',	                        type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T5M1', count:1 }], label:'itemOil', img:'img/icons/item0_6.png', storage:{ base:100, storerId:'storerFluidBuffer' }, recipeId:'recipeOil', lines:[ 'lineOil' ] },
                {	id:'recipeOil',	                        type:'recipe',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], time:1, output:{ id:'itemOil', count:2 } },
                {	id:'lineOil',                           type:'line',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machinePumpjack', recipeId:'recipeOil' },
                //---
                {	id:'itemCaterium',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T6M1', count:1 }], label:'itemCaterium', img:'img/icons/item0_7.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeCaterium', lines:[ 'manualCaterium', 'lineCaterium' ] },
                {	id:'recipeCaterium',	                type:'recipe',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], time:1, output:{ id:'itemCaterium', count:1 } },
                {	id:'manualCaterium',	                type:'line',        reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineManual', recipeId:'recipeCaterium' },
                {	id:'lineCaterium',                      type:'line',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineMiner1', recipeId:'recipeCaterium' },
                //---
                {	id:'itemQuartz',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemQuartz', img:'img/icons/item0_8.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeQuartz', lines:[ 'manualQuartz', 'lineQuartz' ] },
                {	id:'recipeQuartz',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:1, output:{ id:'itemQuartz', count:1 } },
                {	id:'manualQuartz',	                    type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeQuartz' },
                {	id:'lineQuartz',                        type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineMiner1', recipeId:'recipeQuartz' },
                //---
                {	id:'itemBauxite',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemBauxite', img:'img/icons/item0_9.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeBauxite', lines:[ 'manualBauxite', 'lineBauxite' ] },
                {	id:'recipeBauxite',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:1, output:{ id:'itemBauxite', count:1 } },
                {	id:'manualBauxite',	                    type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeBauxite' },
                {	id:'lineBauxite',                       type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineMiner1', recipeId:'recipeBauxite' },
                //---
                {	id:'itemSulfur',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T7M3', count:1 }], label:'itemSulfur', img:'img/icons/item0_10.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeSulfur', lines:[ 'manualSulfur', 'lineSulfur' ] },
                {	id:'recipeSulfur',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], time:1, output:{ id:'itemSulfur', count:1 } },
                {	id:'manualSulfur',	                    type:'line',        reqs:[{ id:'satisfactory1T7M3', count:1 }], machineId:'machineManual', recipeId:'recipeSulfur' },
                {	id:'lineSulfur',                        type:'line',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], machineId:'machineMiner1', recipeId:'recipeSulfur' },
                //---
                {	id:'itemUranium',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T8M1', count:1 }], label:'itemUranium', img:'img/icons/item0_11.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeUranium', lines:[ 'manualUranium', 'lineUranium' ] },
                {	id:'recipeUranium',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], time:1, output:{ id:'itemUranium', count:1 } },
                {	id:'manualUranium',	                    type:'line',        reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineManual', recipeId:'recipeUranium' },
                {	id:'lineUranium',                       type:'line',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineMiner1', recipeId:'recipeUranium' },
                //---
                {	id:'itemNitrogen',	                    type:'item',        cat:'raw', reqs:[{ id:'satisfactory1T8M2', count:1 }], label:'itemNitrogen', img:'img/icons/item0_12.png', storage:{ base:100, storerId:'storerFluidBuffer' }, recipeId:'recipeNitrogen', lines:[ 'lineNitrogen' ] },
                {	id:'recipeNitrogen',	                type:'recipe',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], time:1, output:{ id:'itemNitrogen', count:1 } },
                {	id:'lineNitrogen',                      type:'line',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], machineId:'machineNitroMiner', recipeId:'recipeNitrogen' },
                
                // Level 1
                //---
                {	id:'itemIronIngot',	                    type:'item',        cat:'level1', label:'itemIronIngot', img:'img/icons/item1_0.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeIronIngot', lines:[ 'manualIronIngot', 'lineIronIngot' ] },
                {	id:'recipeIronIngot',	                type:'recipe',	    time:2, output:{ id:'itemIronIngot', count:1 }, inputs:[{ id:'itemIron', count:1 }] },
                {	id:'manualIronIngot',	                type:'line',        machineId:'machineManual', recipeId:'recipeIronIngot' },
                {	id:'lineIronIngot',                     type:'line',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineSmelter', recipeId:'recipeIronIngot' },
                //---
                {	id:'itemCopperIngot',	                type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'itemCopperIngot', img:'img/icons/item1_1.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeCopperIngot', lines:[ 'manualCopperIngot', 'lineCopperIngot' ] },
                {	id:'recipeCopperIngot',	                type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:2, output:{ id:'itemCopperIngot', count:1 }, inputs:[{ id:'itemCopper', count:1 }] },
                {	id:'manualCopperIngot',	                type:'line',        reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineManual', recipeId:'recipeCopperIngot' },
                {	id:'lineCopperIngot',                   type:'line',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineSmelter', recipeId:'recipeCopperIngot' },
                //---
                {	id:'itemConcrete',	                    type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'itemConcrete', img:'img/icons/item1_2.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeConcrete', lines:[ 'manualConcrete', 'lineConcrete' ] },
                {	id:'recipeConcrete',	                type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:4, output:{ id:'itemConcrete', count:1 }, inputs:[{ id:'itemStone', count:3 }] },
                {	id:'manualConcrete',	                type:'line',        reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineManual', recipeId:'recipeConcrete' },
                {	id:'lineConcrete',                      type:'line',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeConcrete' },
                //---
                {	id:'itemBiomass',	                    type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T0M5', count:1 }], label:'itemBiomass', img:'img/icons/item1_3.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeBiomass', lines:[ 'manualBiomass' ] },
                {	id:'recipeBiomass',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M5', count:1 }], time:1, output:{ id:'itemBiomass', count:1 }, inputs:[{ id:'itemLeaves', count:2 }] },
                {	id:'manualBiomass',	                    type:'line',        reqs:[{ id:'satisfactory1T0M5', count:1 }], machineId:'machineManual', recipeId:'recipeBiomass' },
                {	id:'lineBiomass',                       type:'line',	    reqs:[{ id:'satisfactory1T0M5', count:1 }], machineId:'machineConstructor', recipeId:'recipeBiomass' },
                //---
                {	id:'itemSteelIngot',	                type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T3M3', count:1 }], label:'itemSteelIngot', img:'img/icons/item1_4.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeSteelIngot', lines:[ 'manualSteelIngot', 'lineSteelIngot' ] },
                {	id:'recipeSteelIngot',	                type:'recipe',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], time:4, output:{ id:'itemSteelIngot', count:3 }, inputs:[{ id:'itemIron', count:3 },{ id:'itemCoal', count:3 }] },
                {	id:'manualSteelIngot',	                type:'line',        reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineManual', recipeId:'recipeSteelIngot' },
                {	id:'lineSteelIngot',                    type:'line',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineFoundry', recipeId:'recipeSteelIngot' },
                //---
                {	id:'itemFuel',	                        type:'item',        cat:'fluid', reqs:[{ id:'satisfactory1T5M1', count:1 }], label:'itemFuel', img:'img/icons/item1_5.png', storage:{ base:100, storerId:'storerFluidBuffer' }, recipeId:'recipeFuel', lines:[ 'lineFuel' ] },
                {	id:'recipeFuel',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], time:6, output:{ id:'itemFuel', count:4 }, inputs:[{ id:'itemOil', count:6 }] },
                {	id:'lineFuel',                          type:'line',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machineRefinery', recipeId:'recipeFuel' },
                //---
                {	id:'itemRubber',	                    type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T5M1', count:1 }], label:'itemRubber', img:'img/icons/item1_6.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeRubber', lines:[ 'lineRubber' ] },
                {	id:'recipeRubber',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], time:6, output:{ id:'itemRubber', count:2 }, inputs:[{ id:'itemOil', count:3 }] },
                {	id:'lineRubber',                        type:'line',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machineRefinery', recipeId:'recipeRubber' },
                //---
                {	id:'itemPlastic',	                    type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T5M1', count:1 }], label:'itemPlastic', img:'img/icons/item1_7.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipePlastic', lines:[ 'linePlastic' ] },
                {	id:'recipePlastic',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], time:6, output:{ id:'itemPlastic', count:2 }, inputs:[{ id:'itemOil', count:3 }] },
                {	id:'linePlastic',                       type:'line',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machineRefinery', recipeId:'recipePlastic' },
                //---
                {	id:'itemCateriumIngot',	                type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T6M1', count:1 }], label:'itemCateriumIngot', img:'img/icons/item1_8.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeCateriumIngot', lines:[ 'manualCateriumIngot', 'lineCateriumIngot' ] },
                {	id:'recipeCateriumIngot',	            type:'recipe',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], time:4, output:{ id:'itemCateriumIngot', count:1 }, inputs:[{ id:'itemCaterium', count:3 }] },
                {	id:'manualCateriumIngot',	            type:'line',        reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineManual', recipeId:'recipeCateriumIngot' },
                {	id:'lineCateriumIngot',                 type:'line',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineSmelter', recipeId:'recipeCateriumIngot' },
                //---
                {	id:'itemCrystal',	                    type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemCrystal', img:'img/icons/item1_9.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeCrystal', lines:[ 'manualCrystal', 'lineCrystal' ] },
                {	id:'recipeCrystal',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:8, output:{ id:'itemCrystal', count:3 }, inputs:[{ id:'itemQuartz', count:5 }] },
                {	id:'manualCrystal',	                    type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeCrystal' },
                {	id:'lineCrystal',                       type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineConstructor', recipeId:'recipeCrystal' },
                //---
                {	id:'itemSilica',	                    type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemSilica', img:'img/icons/item1_10.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeSilica', lines:[ 'manualSilica', 'lineSilica' ] },
                {	id:'recipeSilica',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:8, output:{ id:'itemSilica', count:5 }, inputs:[{ id:'itemQuartz', count:3 }] },
                {	id:'manualSilica',	                    type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeSilica' },
                {	id:'lineSilica',                        type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineConstructor', recipeId:'recipeSilica' },
                //---
                {	id:'itemAluminaSolution',	            type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemAluminaSolution', img:'img/icons/item1_11.png', storage:{ base:100, storerId:'storerFluidBuffer' }, recipeId:'recipeAluminaSolution', lines:[ 'lineAluminaSolution' ] },
                {	id:'recipeAluminaSolution',	            type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:6, output:{ id:'itemAluminaSolution', count:12 }, inputs:[{ id:'itemBauxite', count:12 },{ id:'itemWater', count:18 }] },
                {	id:'lineAluminaSolution',               type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineRefinery', recipeId:'recipeAluminaSolution' },
                //---
                {	id:'itemSulfuricAcid',	                type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T7M3', count:1 }], label:'itemSulfuricAcid', img:'img/icons/item1_12.png', storage:{ base:100, storerId:'storerFluidBuffer' }, recipeId:'recipeSulfuricAcid', lines:[ 'lineSulfuricAcid' ] },
                {	id:'recipeSulfuricAcid',	            type:'recipe',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], time:6, output:{ id:'itemSulfuricAcid', count:5 }, inputs:[{ id:'itemSulfur', count:5 },{ id:'itemWater', count:5 }] },
                {	id:'lineSulfuricAcid',                  type:'line',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], machineId:'machineRefinery', recipeId:'recipeSulfuricAcid' },
                //---
                {	id:'itemUraniumCell',	                type:'item',        cat:'level1', reqs:[{ id:'satisfactory1T8M1', count:1 }], label:'itemUraniumCell', img:'img/icons/item1_13.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeUraniumCell', lines:[ 'lineUraniumCell' ] },
                {	id:'recipeUraniumCell',	                type:'recipe',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], time:12, output:{ id:'itemUraniumCell', count:5 }, inputs:[{ id:'itemUranium', count:10 },{ id:'itemConcrete', count:3 },{ id:'itemSulfuricAcid', count:6 }] },
                {	id:'lineUraniumCell',                   type:'line',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineBlender', recipeId:'recipeUraniumCell' },
                
                // Level 2
                //---
                {	id:'itemIronRod',	                    type:'item',        cat:'level2', label:'itemIronRod', img:'img/icons/item2_0.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeIronRod', lines:[ 'manualIronRod', 'lineIronRod' ] },
                {	id:'recipeIronRod',	                    type:'recipe',	    time:4, output:{ id:'itemIronRod', count:1 }, inputs:[{ id:'itemIronIngot', count:1 }] },
                {	id:'manualIronRod',	                    type:'line',        machineId:'machineManual', recipeId:'recipeIronRod' },
                {	id:'lineIronRod',                       type:'line',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeIronRod' },
                //---
                {	id:'itemIronPlate',	                    type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T0M1', count:1 }], label:'itemIronPlate', img:'img/icons/item2_1.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeIronPlate', lines:[ 'manualIronPlate', 'lineIronPlate' ] },
                {	id:'recipeIronPlate',	                type:'recipe',	    reqs:[{ id:'satisfactory1T0M1', count:1 }], time:6, output:{ id:'itemIronPlate', count:2 }, inputs:[{ id:'itemIronIngot', count:3 }] },
                {	id:'manualIronPlate',	                type:'line',        reqs:[{ id:'satisfactory1T0M1', count:1 }], machineId:'machineManual', recipeId:'recipeIronPlate' },
                {	id:'lineIronPlate',                     type:'line',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeIronPlate' },
                //---
                {	id:'itemWire',	                        type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'itemWire', img:'img/icons/item2_2.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeWire', lines:[ 'manualWire', 'lineWire' ] },
                {	id:'recipeWire',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:4, output:{ id:'itemWire', count:2 }, inputs:[{ id:'itemCopperIngot', count:1 }] },
                {	id:'manualWire',	                    type:'line',        reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineManual', recipeId:'recipeWire' },
                {	id:'lineWire',                          type:'line',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeWire' },
                //---
                {	id:'itemCopperSheet',	                type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T2M1', count:1 }], label:'itemCopperSheet', img:'img/icons/item2_3.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeCopperSheet', lines:[ 'manualCopperSheet', 'lineCopperSheet' ] },
                {	id:'recipeCopperSheet',	                type:'recipe',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], time:6, output:{ id:'itemCopperSheet', count:1 }, inputs:[{ id:'itemCopperIngot', count:2 }] },
                {	id:'manualCopperSheet',	                type:'line',        reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineManual', recipeId:'recipeCopperSheet' },
                {	id:'lineCopperSheet',                   type:'line',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineConstructor', recipeId:'recipeCopperSheet' },
                //---
                {	id:'itemSteelBeam',	                    type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T3M3', count:1 }], label:'itemSteelBeam', img:'img/icons/item2_4.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeSteelBeam', lines:[ 'manualSteelBeam', 'lineSteelBeam' ] },
                {	id:'recipeSteelBeam',	                type:'recipe',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], time:4, output:{ id:'itemSteelBeam', count:1 }, inputs:[{ id:'itemSteelIngot', count:4 }] },
                {	id:'manualSteelBeam',	                type:'line',        reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineManual', recipeId:'recipeSteelBeam' },
                {	id:'lineSteelBeam',                     type:'line',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeSteelBeam' },
                //---
                {	id:'itemSteelPipe',	                    type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T3M3', count:1 }], label:'itemSteelPipe', img:'img/icons/item2_5.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeSteelPipe', lines:[ 'manualSteelPipe', 'lineSteelPipe' ] },
                {	id:'recipeSteelPipe',	                type:'recipe',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], time:6, output:{ id:'itemSteelPipe', count:2 }, inputs:[{ id:'itemSteelIngot', count:3 }] },
                {	id:'manualSteelPipe',	                type:'line',        reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineManual', recipeId:'recipeSteelPipe' },
                {	id:'lineSteelPipe',                     type:'line',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeSteelPipe' },
                //---
                {	id:'itemQuickwire',	                    type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T6M1', count:1 }], label:'itemQuickwire', img:'img/icons/item2_6.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeQuickwire', lines:[ 'manualQuickwire', 'lineQuickwire' ] },
                {	id:'recipeQuickwire',	                type:'recipe',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], ime:5, output:{ id:'itemQuickwire', count:5 }, inputs:[{ id:'itemCateriumIngot', count:1 }] },
                {	id:'manualQuickwire',	                type:'line',        reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineManual', recipeId:'recipeQuickwire' },
                {	id:'lineQuickwire',                     type:'line',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineConstructor', recipeId:'recipeQuickwire' },
                //---
                {	id:'itemAluminumScrap',	                type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemAluminumScrap', img:'img/icons/item2_7.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeAluminumScrap', lines:[ 'lineAluminumScrap' ] },
                {	id:'recipeAluminumScrap',	            type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:1, output:{ id:'itemAluminumScrap', count:6 }, inputs:[{ id:'itemAluminaSolution', count:4 },{ id:'itemCoal', count:2 }] },
                {	id:'lineAluminumScrap',                 type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineRefinery', recipeId:'recipeAluminumScrap' },
                //---
                {	id:'itemUraniumFuelRod',	            type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T8M1', count:1 }], label:'itemUraniumFuelRod', img:'img/icons/item2_8.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeUraniumFuelRod', lines:[ 'lineUraniumFuelRod' ] },
                {	id:'recipeUraniumFuelRod',	            type:'recipe',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], time:150, output:{ id:'itemUraniumFuelRod', count:1 }, inputs:[{ id:'itemUraniumCell', count:50 },{ id:'itemIndustrialBeam', count:3 },{ id:'itemElectromagneticControlRod', count:5 }] },
                {	id:'lineUraniumFuelRod',                type:'line',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineManufacturer', recipeId:'recipeUraniumFuelRod' },
                //---
                {	id:'itemCopperPowder',	                type:'item',        cat:'level2', reqs:[{ id:'satisfactory1T8M4', count:1 }], label:'itemCopperPowder', img:'img/icons/item2_9.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeCopperPowder', lines:[ 'manualCopperPowder', 'lineCopperPowder' ] },
                {	id:'recipeCopperPowder',	            type:'recipe',	    reqs:[{ id:'satisfactory1T8M4', count:1 }], time:6, output:{ id:'itemCopperPowder', count:5 }, inputs:[{ id:'itemCopperIngot', count:30 }] },
                {	id:'manualCopperPowder',	            type:'line',        reqs:[{ id:'satisfactory1T8M4', count:1 }], machineId:'machineManual', recipeId:'recipeCopperPowder' },
                {	id:'lineCopperPowder',                  type:'line',	    reqs:[{ id:'satisfactory1T8M4', count:1 }], machineId:'machineConstructor', recipeId:'recipeCopperPowder' },
                
                // Level 3
                //---
                {	id:'itemFoundation',	                type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'itemFoundation', img:'img/icons/item3_0.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeFoundation', lines:[ 'manualFoundation' ] },
                {	id:'recipeFoundation',	                type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:1, output:{ id:'itemFoundation', count:1 }, inputs:[{ id:'itemConcrete', count:5 },{ id:'itemIronPlate', count:2 }] },
                {	id:'manualFoundation',	                type:'line',        reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineManual', recipeId:'recipeFoundation' },
                //---
                {	id:'itemScrew',	                        type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T0M3', count:1 }], label:'itemScrew', img:'img/icons/item3_1.png', storage:{ base:500, storerId:'storerStorageContainer' }, recipeId:'recipeScrew', lines:[ 'manualScrew', 'lineScrew' ] },
                {	id:'recipeScrew',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], time:6, output:{ id:'itemScrew', count:4 }, inputs:[{ id:'itemIronRod', count:1 }] },
                {	id:'manualScrew',	                    type:'line',        reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineManual', recipeId:'recipeScrew' },
                {	id:'lineScrew',                         type:'line',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeScrew' },
                //---
                {	id:'itemCable',	                        type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T0M3', count:1 }], label:'itemCable', img:'img/icons/item3_2.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeCable', lines:[ 'manualCable', 'lineCable' ] },
                {	id:'recipeCable',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], time:2, output:{ id:'itemCable', count:1 }, inputs:[{ id:'itemWire', count:2 }] },
                {	id:'manualCable',	                    type:'line',        reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineManual', recipeId:'recipeCable' },
                {	id:'lineCable',                         type:'line',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeCable' },
                //---
                {	id:'itemStator',	                    type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T4M1', count:1 }], label:'itemStator', img:'img/icons/item3_3.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeStator', lines:[ 'manualStator', 'lineStator' ] },
                {	id:'recipeStator',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], time:12, output:{ id:'itemStator', count:1 }, inputs:[{ id:'itemSteelPipe', count:3 },{ id:'itemWire', count:8 }] },
                {	id:'manualStator',	                    type:'line',        reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineManual', recipeId:'recipeStator' },
                {	id:'lineStator',                        type:'line',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeStator' },
                //---
                {	id:'itemIndustrialBeam',	            type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T4M1', count:1 }], label:'itemIndustrialBeam', img:'img/icons/item3_4.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeIndustrialBeam', lines:[ 'manualIndustrialBeam', 'lineIndustrialBeam' ] },
                {	id:'recipeIndustrialBeam',	            type:'recipe',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], time:10, output:{ id:'itemIndustrialBeam', count:1 }, inputs:[{ id:'itemSteelBeam', count:4 },{ id:'itemConcrete', count:5 }] },
                {	id:'manualIndustrialBeam',	            type:'line',        reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineManual', recipeId:'recipeIndustrialBeam' },
                {	id:'lineIndustrialBeam',                type:'line',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeIndustrialBeam' },
                //---
                {	id:'itemCircuit',	                    type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T5M1', count:1 }], label:'itemCircuit', img:'img/icons/item3_5.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeCircuit', lines:[ 'manualCircuit', 'lineCircuit' ] },
                {	id:'recipeCircuit',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], time:8, output:{ id:'itemCircuit', count:1 }, inputs:[{ id:'itemCopperSheet', count:2 },{ id:'itemPlastic', count:4 }] },
                {	id:'manualCircuit',	                    type:'line',        reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machineManual', recipeId:'recipeCircuit' },
                {	id:'lineCircuit',                       type:'line',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeCircuit' },
                //---
                {	id:'itemAILimiter',	                    type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T6M1', count:1 }], label:'itemAILimiter', img:'img/icons/item3_6.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeAILimiter', lines:[ 'manualAILimiter', 'lineAILimiter' ] },
                {	id:'recipeAILimiter',	                type:'recipe',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], time:12, output:{ id:'itemAILimiter', count:1 }, inputs:[{ id:'itemCopperSheet', count:5 },{ id:'itemQuickwire', count:20 }] },
                {	id:'manualAILimiter',	                type:'line',        reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineManual', recipeId:'recipeAILimiter' },
                {	id:'lineAILimiter',                     type:'line',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeAILimiter' },
                //---
                {	id:'itemAluminumIngot',	                type:'item',        cat:'level3', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemAluminumIngot', img:'img/icons/item3_7.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeAluminumIngot', lines:[ 'manualAluminumIngot', 'lineAluminumIngot' ] },
                {	id:'recipeAluminumIngot',	            type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:4, output:{ id:'itemAluminumIngot', count:4 }, inputs:[{ id:'itemAluminumScrap', count:6 },{ id:'itemSilica', count:5 }] },
                {	id:'manualAluminumIngot',	            type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeAluminumIngot' },
                {	id:'lineAluminumIngot',                 type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineFoundry', recipeId:'recipeAluminumIngot' },
                
                // Level 4
                //---
                {	id:'itemReinforcedPlate',               type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T0M3', count:1 }], label:'itemReinforcedPlate', img:'img/icons/item4_0.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeReinforcedPlate', lines:[ 'manualReinforcedPlate' ] },
                {	id:'recipeReinforcedPlate',             type:'recipe',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], time:12, output:{ id:'itemReinforcedPlate', count:1 }, inputs:[{ id:'itemIronPlate', count:6 },{ id:'itemScrew', count:12 }] },
                {	id:'manualReinforcedPlate',             type:'line',        reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineManual', recipeId:'recipeReinforcedPlate' },
                //---
                {	id:'itemRotor',	                        type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T2M1', count:1 }], label:'itemRotor', img:'img/icons/item4_1.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeRotor', lines:[ 'manualRotor', 'lineRotor' ] },
                {	id:'recipeRotor',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], time:15, output:{ id:'itemRotor', count:1 }, inputs:[{ id:'itemIronRod', count:5 },{ id:'itemScrew', count:25 }] },
                {	id:'manualRotor',	                    type:'line',        reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineManual', recipeId:'recipeRotor' },
                {	id:'lineRotor',                         type:'line',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeRotor' },
                //---
                {	id:'itemAutomatedWiring',	            type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T4M1', count:1 }], label:'itemAutomatedWiring', img:'img/icons/item4_2.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeAutomatedWiring', lines:[ 'lineAutomatedWiring' ] },
                {	id:'recipeAutomatedWiring',	            type:'recipe',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], time:24, output:{ id:'itemAutomatedWiring', count:1 }, inputs:[{ id:'itemStator', count:1 },{ id:'itemCable', count:20 }] },
                {	id:'lineAutomatedWiring',               type:'line',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeAutomatedWiring' },
                //---
                {	id:'itemComputer',	                    type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T5M2', count:1 }], label:'itemComputer', img:'img/icons/item4_3.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeComputer', lines:[ 'manualComputer', 'lineComputer' ] },
                {	id:'recipeComputer',	                type:'recipe',	    reqs:[{ id:'satisfactory1T5M2', count:1 }], time:24, output:{ id:'itemComputer', count:1 }, inputs:[{ id:'itemCircuit', count:10 },{ id:'itemCable', count:9 },{ id:'itemPlastic', count:18 },{ id:'itemScrew', count:52 }] },
                {	id:'manualComputer',	                type:'line',        reqs:[{ id:'satisfactory1T5M2', count:1 }], machineId:'machineManual', recipeId:'recipeComputer' },
                {	id:'lineComputer',                      type:'line',	    reqs:[{ id:'satisfactory1T5M2', count:1 }], machineId:'machineManufacturer', recipeId:'recipeComputer' },
                //---
                {	id:'itemHighSpeedConnector',	        type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T6M1', count:1 }], label:'itemHighSpeedConnector', img:'img/icons/item4_4.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeHighSpeedConnector', lines:[ 'manualHighSpeedConnector', 'lineHighSpeedConnector' ] },
                {	id:'recipeHighSpeedConnector',	        type:'recipe',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], time:16, output:{ id:'itemHighSpeedConnector', count:1 }, inputs:[{ id:'itemQuickwire', count:56 },{ id:'itemCable', count:10 },{ id:'itemCircuit', count:1 }] },
                {	id:'manualHighSpeedConnector',	        type:'line',        reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineManual', recipeId:'recipeHighSpeedConnector' },
                {	id:'lineHighSpeedConnector',            type:'line',	    reqs:[{ id:'satisfactory1T6M1', count:1 }], machineId:'machineManufacturer', recipeId:'recipeHighSpeedConnector' },
                //---
                {	id:'itemAluminumCasing',	            type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemAluminumCasing', img:'img/icons/item4_5.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeAluminumCasing', lines:[ 'manualAluminumCasing', 'lineAluminumCasing' ] },
                {	id:'recipeAluminumCasing',	            type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:2, output:{ id:'itemAluminumCasing', count:2 }, inputs:[{ id:'itemAluminumIngot', count:3 }] },
                {	id:'manualAluminumCasing',	            type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeAluminumCasing' },
                {	id:'lineAluminumCasing',                type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineConstructor', recipeId:'recipeAluminumCasing' },
                //---
                {	id:'itemAlcladAluminumSheet',	        type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemAlcladAluminumSheet', img:'img/icons/item4_6.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeAlcladAluminumSheet', lines:[ 'manualAlcladAluminumSheet', 'lineAlcladAluminumSheet' ] },
                {	id:'recipeAlcladAluminumSheet',	        type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:6, output:{ id:'itemAlcladAluminumSheet', count:3 }, inputs:[{ id:'itemAluminumIngot', count:3 },{ id:'itemCopperIngot', count:1 }] },
                {	id:'manualAlcladAluminumSheet',	        type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeAlcladAluminumSheet' },
                {	id:'lineAlcladAluminumSheet',           type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeAlcladAluminumSheet' },
                //---
                {	id:'itemElectromagneticControlRod',	    type:'item',        cat:'level4', reqs:[{ id:'satisfactory1T8M1', count:1 }], label:'itemElectromagneticControlRod', img:'img/icons/item4_7.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeElectromagneticControlRod', lines:[ 'manualElectromagneticControlRod', 'lineElectromagneticControlRod' ] },
                {	id:'recipeElectromagneticControlRod',   type:'recipe',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], time:15, output:{ id:'itemElectromagneticControlRod', count:2 }, inputs:[{ id:'itemStator', count:3 },{ id:'itemAILimiter', count:2 }] },
                {	id:'manualElectromagneticControlRod',   type:'line',        reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineManual', recipeId:'recipeElectromagneticControlRod' },
                {	id:'lineElectromagneticControlRod',     type:'line',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeElectromagneticControlRod' },
                
                // Level 5
                //---
                {	id:'itemModularFrame',	                type:'item',        cat:'level5', reqs:[{ id:'satisfactory1T2M1', count:1 }], label:'itemModularFrame', img:'img/icons/item5_0.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeModularFrame', lines:[ 'manualModularFrame', 'lineModularFrame' ] },
                {	id:'recipeModularFrame',	            type:'recipe',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], time:60, output:{ id:'itemModularFrame', count:1 }, inputs:[{ id:'itemReinforcedPlate', count:3 },{ id:'itemIronRod', count:12 }] },
                {	id:'manualModularFrame',	            type:'line',        reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineManual', recipeId:'recipeModularFrame' },
                {	id:'lineModularFrame',                  type:'line',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeModularFrame' },
                //---
                {	id:'itemSmartPlating',	                type:'item',        cat:'level5', reqs:[{ id:'satisfactory1T2M1', count:1 }], label:'itemSmartPlating', img:'img/icons/item5_1.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeSmartPlating', lines:[ 'lineSmartPlating' ] },
                {	id:'recipeSmartPlating',	            type:'recipe',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], time:30, output:{ id:'itemSmartPlating', count:1 }, inputs:[{ id:'itemReinforcedPlate', count:1 },{ id:'itemRotor', count:1 }] },
                {	id:'lineSmartPlating',                  type:'line',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeSmartPlating' },
                //---
                {	id:'itemMotor',	                        type:'item',        cat:'level5', reqs:[{ id:'satisfactory1T4M1', count:1 }], label:'itemMotor', img:'img/icons/item5_2.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeMotor', lines:[ 'manualMotor', 'lineMotor' ] },
                {	id:'recipeMotor',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], time:12, output:{ id:'itemMotor', count:1 }, inputs:[{ id:'itemRotor', count:2 },{ id:'itemStator', count:2 }] },
                {	id:'manualMotor',	                    type:'line',        reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineManual', recipeId:'recipeMotor' },
                {	id:'lineMotor',                         type:'line',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineAssembler', recipeId:'recipeMotor' },
                //---
                {	id:'itemCrystalOscillator',	            type:'item',        cat:'level5', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemCrystalOscillator', img:'img/icons/item5_3.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeCrystalOscillator', lines:[ 'manualCrystalOscillator', 'lineCrystalOscillator' ] },
                {	id:'recipeCrystalOscillator',	        type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:120, output:{ id:'itemCrystalOscillator', count:2 }, inputs:[{ id:'itemCrystal', count:36 },{ id:'itemCable', count:28 },{ id:'itemReinforcedPlate', count:5 }] },
                {	id:'manualCrystalOscillator',	        type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeCrystalOscillator' },
                {	id:'lineCrystalOscillator',             type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineConstructor', recipeId:'recipeCrystalOscillator' },
                //---
                {	id:'itemBattery',	                    type:'item',        cat:'level5', reqs:[{ id:'satisfactory1T7M3', count:1 }], label:'itemBattery', img:'img/icons/item5_4.png', storage:{ base:200, storerId:'storerStorageContainer' }, recipeId:'recipeBattery', lines:[ 'lineBattery' ] },
                {	id:'recipeBattery',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], time:3, output:{ id:'itemBattery', count:1 }, inputs:[{ id:'itemSulfuricAcid', count:2.5 },{ id:'itemAluminaSolution', count:2 },{ id:'itemAluminumCasing', count:1 }] },
                {	id:'lineBattery',                       type:'line',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], machineId:'machineBlender', recipeId:'recipeBattery' },
                //---
                {	id:'itemSupercomputer',	                type:'item',        cat:'level5', reqs:[{ id:'satisfactory1T7M3', count:1 }], label:'itemSupercomputer', img:'img/icons/item5_5.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeSupercomputer', lines:[ 'manualSupercomputer', 'lineSupercomputer' ] },
                {	id:'recipeSupercomputer',	            type:'recipe',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], time:32, output:{ id:'itemSupercomputer', count:1 }, inputs:[{ id:'itemComputer', count:2 },{ id:'itemAILimiter', count:2 },{ id:'itemHighSpeedConnector', count:3 },{ id:'itemPlastic', count:28 }] },
                {	id:'manualSupercomputer',	            type:'line',        reqs:[{ id:'satisfactory1T7M3', count:1 }], machineId:'machineManual', recipeId:'recipeSupercomputer' },
                {	id:'lineSupercomputer',                 type:'line',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], machineId:'machineManufacturer', recipeId:'recipeSupercomputer' },
                //---
                {	id:'itemHeatSink',	                    type:'item',        cat:'level5', reqs:[{ id:'satisfactory1T8M2', count:1 }], label:'itemHeatSink', img:'img/icons/item5_6.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeHeatSink', lines:[ 'manualHeatSink', 'lineHeatSink' ] },
                {	id:'recipeHeatSink',	                type:'recipe',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], time:8, output:{ id:'itemHeatSink', count:1 }, inputs:[{ id:'itemAlcladAluminumSheet', count:5 },{ id:'itemCopperSheet', count:3 }] },
                {	id:'manualHeatSink',	                type:'line',        reqs:[{ id:'satisfactory1T8M2', count:1 }], machineId:'machineManual', recipeId:'recipeHeatSink' },
                {	id:'lineHeatSink',                      type:'line',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], machineId:'machineAssembler', recipeId:'recipeHeatSink' },
                
                // Level 6
                //---
                {	id:'itemVersatileFramework',	        type:'item',        cat:'level6', reqs:[{ id:'satisfactory1T3M3', count:1 }], label:'itemVersatileFramework', img:'img/icons/item6_0.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeVersatileFramework', lines:[ 'lineVersatileFramework' ] },
                {	id:'recipeVersatileFramework',	        type:'recipe',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], time:24, output:{ id:'itemVersatileFramework', count:2 }, inputs:[{ id:'itemModularFrame', count:1 },{ id:'itemSteelBeam', count:12 }] },
                {	id:'lineVersatileFramework',            type:'line',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineAssembler', recipeId:'recipeVersatileFramework' },
                //---
                {	id:'itemHeavyModularFrame',	            type:'item',        cat:'level6', reqs:[{ id:'satisfactory1T4M1', count:1 }], label:'itemHeavyModularFrame', img:'img/icons/item6_1.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeHeavyModularFrame', lines:[ 'manualHeavyModularFrame', 'lineHeavyModularFrame' ] },
                {	id:'recipeHeavyModularFrame',	        type:'recipe',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], time:30, output:{ id:'itemHeavyModularFrame', count:1 }, inputs:[{ id:'itemModularFrame', count:5 },{ id:'itemSteelPipe', count:15 },{ id:'itemIndustrialBeam', count:5 },{ id:'itemScrew', count:100 }] },
                {	id:'manualHeavyModularFrame',	        type:'line',        reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineManual', recipeId:'recipeHeavyModularFrame' },
                {	id:'lineHeavyModularFrame',             type:'line',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineManufacturer', recipeId:'recipeHeavyModularFrame' },
                //---
                {	id:'itemModularEngine',	                type:'item',        cat:'level6', reqs:[{ id:'satisfactory1T5M2', count:1 }], label:'itemModularEngine', img:'img/icons/item6_2.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeModularEngine', lines:[ 'lineModularEngine' ] },
                {	id:'recipeModularEngine',	            type:'recipe',	    reqs:[{ id:'satisfactory1T5M2', count:1 }], time:60, output:{ id:'itemModularEngine', count:1 }, inputs:[{ id:'itemMotor', count:2 },{ id:'itemRubber', count:15 },{ id:'itemSmartPlating', count:2 }] },
                {	id:'lineModularEngine',                 type:'line',	    reqs:[{ id:'satisfactory1T5M2', count:1 }], machineId:'machineConstructor', recipeId:'recipeModularEngine' },
                //---
                {	id:'itemRadioControlUnit',	            type:'item',        cat:'level6', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'itemRadioControlUnit', img:'img/icons/item6_3.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeRadioControlUnit', lines:[ 'manualRadioControlUnit', 'lineRadioControlUnit' ] },
                {	id:'recipeRadioControlUnit',	        type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:48, output:{ id:'itemRadioControlUnit', count:2 }, inputs:[{ id:'itemAluminumCasing', count:32 },{ id:'itemCrystalOscillator', count:1 },{ id:'itemComputer', count:1 }] },
                {	id:'manualRadioControlUnit',	        type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeRadioControlUnit' },
                {	id:'lineRadioControlUnit',              type:'line',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManufacturer', recipeId:'recipeRadioControlUnit' },
                //---
                {	id:'itemCoolingSystem',	                type:'item',        cat:'level6', reqs:[{ id:'satisfactory1T8M2', count:1 }], label:'itemCoolingSystem', img:'img/icons/item6_4.png', storage:{ base:100, storerId:'storerStorageContainer' }, recipeId:'recipeCoolingSystem', lines:[ 'lineCoolingSystem' ] },
                {	id:'recipeCoolingSystem',	            type:'recipe',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], time:10, output:{ id:'itemCoolingSystem', count:1 }, inputs:[{ id:'itemHeatSink', count:2 },{ id:'itemRubber', count:2 },{ id:'itemWater', count:5 },{ id:'itemNitrogen', count:25 }] },
                {	id:'lineCoolingSystem',                 type:'line',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], machineId:'machineBlender', recipeId:'recipeCoolingSystem' },
                
                // Level 7
                //---
                {	id:'itemAdaptiveControlUnit',	        type:'item',        cat:'level7', reqs:[{ id:'satisfactory1T5M2', count:1 }], label:'itemAdaptiveControlUnit', img:'img/icons/item7_0.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeAdaptiveControlUnit', lines:[ 'lineAdaptiveControlUnit' ] },
                {	id:'recipeAdaptiveControlUnit',	        type:'recipe',	    reqs:[{ id:'satisfactory1T5M2', count:1 }], time:120, output:{ id:'itemAdaptiveControlUnit', count:2 }, inputs:[{ id:'itemAutomatedWiring', count:15 },{ id:'itemCircuit', count:10 },{ id:'itemHeavyModularFrame', count:2 },{ id:'itemComputer', count:2 }] },
                {	id:'lineAdaptiveControlUnit',           type:'line',	    reqs:[{ id:'satisfactory1T5M2', count:1 }], machineId:'machineManufacturer', recipeId:'recipeAdaptiveControlUnit' },
                //---
                {	id:'itemMagneticFieldGenerator',	    type:'item',        cat:'level7', reqs:[{ id:'satisfactory1T8M1', count:1 }], label:'itemMagneticFieldGenerator', img:'img/icons/item7_1.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeMagneticFieldGenerator', lines:[ 'lineMagneticFieldGenerator' ] },
                {	id:'recipeMagneticFieldGenerator',	    type:'recipe',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], time:120, output:{ id:'itemMagneticFieldGenerator', count:2 }, inputs:[{ id:'itemVersatileFramework', count:5 },{ id:'itemElectromagneticControlRod', count:2 },{ id:'itemBattery', count:10 }] },
                {	id:'lineMagneticFieldGenerator',        type:'line',	    reqs:[{ id:'satisfactory1T8M1', count:1 }], machineId:'machineManufacturer', recipeId:'recipeMagneticFieldGenerator' },
                //---
                {	id:'itemFusedModularFrame',	            type:'item',        cat:'level7', reqs:[{ id:'satisfactory1T8M2', count:1 }], label:'itemFusedModularFrame', img:'img/icons/item7_2.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeFusedModularFrame', lines:[ 'lineFusedModularFrame' ] },
                {	id:'recipeFusedModularFrame',	        type:'recipe',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], time:40, output:{ id:'itemFusedModularFrame', count:1 }, inputs:[{ id:'itemHeavyModularFrame', count:1 },{ id:'itemAluminumCasing', count:50 },{ id:'itemNitrogen', count:25 }] },
                {	id:'lineFusedModularFrame',             type:'line',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], machineId:'machineBlender', recipeId:'recipeFusedModularFrame' },
                //---
                {	id:'itemTurboMotor',	                type:'item',        cat:'level7', reqs:[{ id:'satisfactory1T8M3', count:1 }], label:'itemTurboMotor', img:'img/icons/item7_3.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeTurboMotor', lines:[ 'manualTurboMotor', 'lineTurboMotor' ] },
                {	id:'recipeTurboMotor',	                type:'recipe',	    reqs:[{ id:'satisfactory1T8M3', count:1 }], time:32, output:{ id:'itemTurboMotor', count:1 }, inputs:[{ id:'itemCoolingSystem', count:4 },{ id:'itemRadioControlUnit', count:2 },{ id:'itemMotor', count:4 },{ id:'itemRubber', count:24 }] },
                {	id:'manualTurboMotor',	                type:'line',        reqs:[{ id:'satisfactory1T8M3', count:1 }], machineId:'machineManual', recipeId:'recipeTurboMotor' },
                {	id:'lineTurboMotor',                    type:'line',	    reqs:[{ id:'satisfactory1T8M3', count:1 }], machineId:'machineManufacturer', recipeId:'recipeTurboMotor' },
                
                // Level 8
                //---
                {	id:'itemAssemblyDirectorSystem',	    type:'item',        cat:'level8', reqs:[{ id:'satisfactory1T7M3', count:1 }], label:'itemAssemblyDirectorSystem', img:'img/icons/item8_0.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeAssemblyDirectorSystem', lines:[ 'lineAssemblyDirectorSystem' ] },
                {	id:'recipeAssemblyDirectorSystem',	    type:'recipe',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], time:80, output:{ id:'itemAssemblyDirectorSystem', count:1 }, inputs:[{ id:'itemAdaptiveControlUnit', count:2 },{ id:'itemSupercomputer', count:1 }] },
                {	id:'lineAssemblyDirectorSystem',        type:'line',	    reqs:[{ id:'satisfactory1T7M3', count:1 }], machineId:'machineConstructor', recipeId:'recipeAssemblyDirectorSystem' },
                //---
                {	id:'itemThermalPropulsionRocket',	    type:'item',        cat:'level8', reqs:[{ id:'satisfactory1T8M3', count:1 }], label:'itemThermalPropulsionRocket', img:'img/icons/item8_1.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeThermalPropulsionRocket', lines:[ 'lineThermalPropulsionRocket' ] },
                {	id:'recipeThermalPropulsionRocket',	    type:'recipe',	    reqs:[{ id:'satisfactory1T8M3', count:1 }], time:120, output:{ id:'itemThermalPropulsionRocket', count:2 }, inputs:[{ id:'itemModularEngine', count:5 },{ id:'itemTurboMotor', count:2 },{ id:'itemCoolingSystem', count:6 },{ id:'itemFusedModularFrame', count:2 }] },
                {	id:'lineThermalPropulsionRocket',       type:'line',	    reqs:[{ id:'satisfactory1T8M3', count:1 }], machineId:'machineManufacturer', recipeId:'recipeThermalPropulsionRocket' },
                //---
                {	id:'itemPressureConversionCube',	    type:'item',        cat:'level8', reqs:[{ id:'satisfactory1T8M4', count:1 }], label:'itemPressureConversionCube', img:'img/icons/item8_2.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipePressureConversionCube', lines:[ 'manualPressureConversionCube', 'linePressureConversionCube' ] },
                {	id:'recipePressureConversionCube',	    type:'recipe',	    reqs:[{ id:'satisfactory1T8M4', count:1 }], time:60, output:{ id:'itemPressureConversionCube', count:1 }, inputs:[{ id:'itemFusedModularFrame', count:1 },{ id:'itemRadioControlUnit', count:2 }] },
                {	id:'manualPressureConversionCube',	    type:'line',        reqs:[{ id:'satisfactory1T8M4', count:1 }], machineId:'machineManual', recipeId:'recipePressureConversionCube' },
                {	id:'linePressureConversionCube',        type:'line',	    reqs:[{ id:'satisfactory1T8M4', count:1 }], machineId:'machineAssembler', recipeId:'recipePressureConversionCube' },
                
                // Level 9
                //---
                {	id:'itemNuclearPasta',	                type:'item',        cat:'level9', reqs:[{ id:'satisfactory1T8M4', count:1 }], label:'itemNuclearPasta', img:'img/icons/item9_0.png', storage:{ base:50, storerId:'storerStorageContainer' }, recipeId:'recipeNuclearPasta', lines:[ 'lineNuclearPasta' ] },
                {	id:'recipeNuclearPasta',	            type:'recipe',	    reqs:[{ id:'satisfactory1T8M4', count:1 }], time:120, output:{ id:'itemNuclearPasta', count:1 }, inputs:[{ id:'itemCopperPowder', count:200 },{ id:'itemPressureConversionCube', count:1 }] },
                {	id:'lineNuclearPasta',                  type:'line',	    reqs:[{ id:'satisfactory1T8M4', count:1 }], machineId:'machineParticleAccelerator', recipeId:'recipeNuclearPasta' },
                                
                // Machines
                //---
                {	id:'machineManual',	                    type:'item',	    label:'machineManual', img:'img/icons/manual.png', storage:{ base:1 }, speed:0.5, initCount:1 },
                //---
                {	id:'machineMiner0',	                    type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T0M1', count:1 }], label:'machineMiner0', img:'img/icons/drill_0.png', storage:{ base:2 }, speed:0.5 },
                //---
                {	id:'machineSmelter',	                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T0M2', count:1 }], label:'machineSmelter', img:'img/icons/furnace.png', recipeId:'recipeSmelter', lines:[ 'manualSmelter' ], speed:1, energy:{ id:'itemElectricity', count:4 } },
                {	id:'recipeSmelter',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M2', count:1 }], time:1, output:{ id:'machineSmelter', count:1 }, inputs:[{ id:'itemFoundation', count:0.75 },{ id:'itemIronRod', count:5 },{ id:'itemWire', count:8 }] },
                {	id:'manualSmelter',	                    type:'line',        reqs:[{ id:'satisfactory1T0M2', count:1 }], machineId:'machineManual', recipeId:'recipeSmelter' },
                //---
                {	id:'machineConstructor',                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T0M3', count:1 }], label:'machineConstructor', img:'img/icons/assembler.png', recipeId:'recipeConstructor', lines:[ 'manualConstructor' ], speed:1, energy:{ id:'itemElectricity', count:4 } },
                {	id:'recipeConstructor',	                type:'recipe',	    reqs:[{ id:'satisfactory1T0M3', count:1 }], time:1, output:{ id:'machineConstructor', count:1 }, inputs:[{ id:'itemFoundation', count:1.25 },{ id:'itemReinforcedPlate', count:2 },{ id:'itemCable', count:8 }] },
                {	id:'manualConstructor',	                type:'line',        reqs:[{ id:'satisfactory1T0M3', count:1 }], machineId:'machineManual', recipeId:'recipeConstructor' },
                //---
                {	id:'machineMiner1',	                    type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T0M4', count:1 }], label:'machineMiner1', img:'img/icons/drill_1.png', recipeId:'recipeMiner1', lines:[ 'manualMiner1' ], speed:1, energy:{ id:'itemElectricity', count:5 } },
                {	id:'recipeMiner1',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T0M4', count:1 }], time:1, output:{ id:'machineMiner1', count:1 }, inputs:[{ id:'itemFoundation', count:1.25 },{ id:'itemIronPlate', count:10 },{ id:'itemConcrete', count:10 }] },
                {	id:'manualMiner1',	                    type:'line',        reqs:[{ id:'satisfactory1T0M4', count:1 }], machineId:'machineManual', recipeId:'recipeMiner1' },
                //---
                {	id:'machineAssembler',	                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T2M1', count:1 }], label:'machineAssembler', img:'img/icons/factory_1.png', recipeId:'recipeAssembler', lines:[ 'manualAssembler' ], speed:1, energy:{ id:'itemElectricity', count:15 } },
                {	id:'recipeAssembler',	                type:'recipe',	    reqs:[{ id:'satisfactory1T2M1', count:1 }], time:1, output:{ id:'machineAssembler', count:1 }, inputs:[{ id:'itemFoundation', count:2.5 },{ id:'itemReinforcedPlate', count:8 },{ id:'itemMotor', count:4 },{ id:'itemCable', count:10 }] },
                {	id:'manualAssembler',	                type:'line',        reqs:[{ id:'satisfactory1T2M1', count:1 }], machineId:'machineManual', recipeId:'recipeAssembler' },
                //---
                {	id:'machinePump',	                    type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T3M1', count:1 }], label:'machinePump', img:'img/icons/pump.png', recipeId:'recipePump', lines:[ 'manualPump' ], speed:1, energy:{ id:'itemElectricity', count:20 } },
                {	id:'recipePump',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T3M1', count:1 }], time:1, output:{ id:'machinePump', count:1 }, inputs:[{ id:'itemFoundation', count:6 },{ id:'itemCopperSheet', count:20 },{ id:'itemReinforcedPlate', count:10 },{ id:'itemRotor', count:10 }] },
                {	id:'manualPump',	                    type:'line',        reqs:[{ id:'satisfactory1T3M1', count:1 }], machineId:'machineManual', recipeId:'recipePump' },
                //---
                {	id:'machineFoundry',	                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T3M3', count:1 }], label:'machineFoundry', img:'img/icons/foundry.png', recipeId:'recipeFoundry', lines:[ 'manualFoundry' ], speed:1, energy:{ id:'itemElectricity', count:16 } },
                {	id:'recipeFoundry',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T3M3', count:1 }], time:1, output:{ id:'machineFoundry', count:1 }, inputs:[{ id:'itemFoundation', count:1.5 },{ id:'itemModularFrame', count:10 },{ id:'itemRotor', count:10 },{ id:'itemConcrete', count:20 }] },
                {	id:'manualFoundry',	                    type:'line',        reqs:[{ id:'satisfactory1T3M3', count:1 }], machineId:'machineManual', recipeId:'recipeFoundry' },
                //---
                {	id:'machinePumpjack',	                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T5M1', count:1 }], label:'machinePumpjack', img:'img/icons/pumpjack.png', recipeId:'recipePumpjack', lines:[ 'manualPumpjack' ], speed:1, energy:{ id:'itemElectricity', count:40 } },
                {	id:'recipePumpjack',	                type:'recipe',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], time:1, output:{ id:'machinePumpjack', count:1 }, inputs:[{ id:'itemFoundation', count:1.75 },{ id:'itemMotor', count:15 },{ id:'itemIndustrialBeam', count:20 },{ id:'itemCable', count:60 }] },
                {	id:'manualPumpjack',	                type:'line',        reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machineManual', recipeId:'recipePumpjack' },
                //---
                {	id:'machineRefinery',	                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T5M1', count:1 }], label:'machineRefinery', img:'img/icons/refinery.png', recipeId:'recipeRefinery', lines:[ 'manualRefinery' ], speed:1, energy:{ id:'itemElectricity', count:30 } },
                {	id:'recipeRefinery',	                type:'recipe',	    reqs:[{ id:'satisfactory1T5M1', count:1 }], time:1, output:{ id:'machineRefinery', count:1 }, inputs:[{ id:'itemFoundation', count:3 },{ id:'itemMotor', count:10 },{ id:'itemIndustrialBeam', count:10 },{ id:'itemSteelPipe', count:30 },{ id:'itemCopperSheet', count:20 }] },
                {	id:'manualRefinery',	                type:'line',        reqs:[{ id:'satisfactory1T5M1', count:1 }], machineId:'machineManual', recipeId:'recipeRefinery' },
                //---
                {	id:'machineManufacturer',	            type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T5M2', count:1 }], label:'machineManufacturer', img:'img/icons/factory_2.png', recipeId:'recipeManufacturer', lines:[ 'manualManufacturer' ], speed:1, energy:{ id:'itemElectricity', count:55 } },
                {	id:'recipeManufacturer',	            type:'recipe',	    reqs:[{ id:'satisfactory1T5M2', count:1 }], time:1, output:{ id:'machineManufacturer', count:1 }, inputs:[{ id:'itemFoundation', count:5.5 },{ id:'itemMotor', count:5 },{ id:'itemHeavyModularFrame', count:10 },{ id:'itemCable', count:50 },{ id:'itemPlastic', count:50 }] },
                {	id:'manualManufacturer',	            type:'line',        reqs:[{ id:'satisfactory1T5M2', count:1 }], machineId:'machineManual', recipeId:'recipeManufacturer' },
                //---
                {	id:'machineBlender',	                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T7M1', count:1 }], label:'machineBlender', img:'img/icons/factory_3.png', recipeId:'recipeBlender', lines:[ 'manualBlender' ], speed:1, energy:{ id:'itemElectricity', count:75 } },
                {	id:'recipeBlender',	                    type:'recipe',	    reqs:[{ id:'satisfactory1T7M1', count:1 }], time:1, output:{ id:'machineBlender', count:1 }, inputs:[{ id:'itemFoundation', count:8.5 },{ id:'itemMotor', count:20 },{ id:'itemHeavyModularFrame', count:10 },{ id:'itemAluminumCasing', count:50 },{ id:'itemRadioControlUnit', count:5 }] },
                {	id:'manualBlender',	                    type:'line',        reqs:[{ id:'satisfactory1T7M1', count:1 }], machineId:'machineManual', recipeId:'recipeBlender' },
                //---
                {	id:'machineNitroMiner',	                type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T8M2', count:1 }], label:'machineMiner2', img:'img/icons/drill_2.png', recipeId:'recipeNitroMiner', lines:[ 'manualNitroMiner' ], speed:1, energy:{ id:'itemElectricity', count:150 } },
                {	id:'recipeNitroMiner',	                type:'recipe',	    reqs:[{ id:'satisfactory1T8M2', count:1 }], time:1, output:{ id:'machineNitroMiner', count:1 }, inputs:[{ id:'itemFoundation', count:6.25 },{ id:'itemWire', count:200 },{ id:'itemRubber', count:50 },{ id:'itemIndustrialBeam', count:50 },{ id:'itemMotor', count:50 },{ id:'itemSteelBeam', count:10 },{ id:'itemPlastic', count:10 }] },
                {	id:'manualNitroMiner',	                type:'line',        reqs:[{ id:'satisfactory1T8M2', count:1 }], machineId:'machineManual', recipeId:'recipeNitroMiner' },
                //---
                {	id:'machineParticleAccelerator',	    type:'item',	    cat:'machine', reqs:[{ id:'satisfactory1T8M4', count:1 }], label:'machineParticleAccelerator', img:'img/icons/silo.png', recipeId:'recipeParticleAccelerator', lines:[ 'manualParticleAccelerator' ], speed:1, energy:{ id:'itemElectricity', count:1000 } },
                {	id:'recipeParticleAccelerator',	        type:'recipe',	    reqs:[{ id:'satisfactory1T8M4', count:1 }], time:1, output:{ id:'machineParticleAccelerator', count:1 }, inputs:[{ id:'itemFoundation', count:14.25 },{ id:'itemRadioControlUnit', count:25 },{ id:'itemElectromagneticControlRod', count:100 },{ id:'itemSupercomputer', count:10 },{ id:'itemCoolingSystem', count:50 },{ id:'itemFusedModularFrame', count:20 },{ id:'itemTurboMotor', count:10 }] },
                {	id:'manualParticleAccelerator',	        type:'line',        reqs:[{ id:'satisfactory1T8M4', count:1 }], machineId:'machineManual', recipeId:'recipeParticleAccelerator' },
                
                // Storers
                //---
                {	id:'storerStorageContainer',	        type:'item',	    cat:'storer', reqs:[{ id:'satisfactory1T0M5', count:1 }], label:'storerBox', img:'img/icons/box.png', recipeId:'recipeStorageContainer', lines:[ 'manualStorageContainer' ] },
                {	id:'recipeStorageContainer',	        type:'recipe',	    reqs:[{ id:'satisfactory1T0M5', count:1 }], time:1, output:{ id:'storerStorageContainer', count:1 }, inputs:[{ id:'itemFoundation', count:1 },{ id:'itemIronPlate', count:10 },{ id:'itemIronRod', count:10 }] },
                {	id:'manualStorageContainer',	        type:'line',        reqs:[{ id:'satisfactory1T0M5', count:1 }], machineId:'machineManual', recipeId:'recipeStorageContainer' },
                //---
                {	id:'storerFluidBuffer',	                type:'item',	    cat:'storer', reqs:[{ id:'satisfactory1T3M1', count:1 }], label:'storerBarrel', img:'img/icons/barrel.png', recipeId:'recipeFluidBuffer', lines:[ 'manualFluidBuffer' ] },
                {	id:'recipeFluidBuffer',	                type:'recipe',	    reqs:[{ id:'satisfactory1T3M1', count:1 }], time:1, output:{ id:'storerFluidBuffer', count:1 }, inputs:[{ id:'itemFoundation', count:0.5 },{ id:'itemCopperSheet', count:10 },{ id:'itemModularFrame', count:5 }] },
                {	id:'manualFluidBuffer',	                type:'line',        reqs:[{ id:'satisfactory1T3M1', count:1 }], machineId:'machineManual', recipeId:'recipeFluidBuffer' },
                //---
                {	id:'storerPowerStorage',	            type:'item',	    cat:'storer', reqs:[{ id:'satisfactory1T4M1', count:1 }], label:'storerAccumulator', img:'img/icons/battery.png', recipeId:'recipePowerStorage', lines:[ 'manualPowerStorage' ] },
                {	id:'recipePowerStorage',	            type:'recipe',	    reqs:[{ id:'satisfactory1T4M1', count:1 }], time:1, output:{ id:'storerPowerStorage', count:1 }, inputs:[{ id:'itemFoundation', count:0.5 },{ id:'itemWire', count:100 },{ id:'itemModularFrame', count:10 },{ id:'itemStator', count:5 }] },
                {	id:'manualPowerStorage',	            type:'line',        reqs:[{ id:'satisfactory1T4M1', count:1 }], machineId:'machineManual', recipeId:'recipePowerStorage' },
            ]
        }},
    ]
}
