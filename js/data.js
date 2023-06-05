//---
var DATA = {
    //---
    scenarii:[
        //---
        { id:'tut', label:'scenario_tut', desc:'scenarioDesc_tut', data:{
            //---
            victoryReqs:[{ id:'tutMission6', count:1 }],
            //---
            elems:[
                //---
                {	id:'tutMission1',	    type:'mission',	                                        label:'tutMission1', desc:'tutMission1Desc', costs:[{ id:'itemStone', count:5 }], rewards:[{ id:'itemStone', count:5 }] },
                {	id:'tutMission2',	    type:'mission',	reqs:[{ id:'tutMission1', count:1 }],   label:'tutMission2', desc:'tutMission2Desc', costs:[{ id:'machineFurnace1', count:1 }], rewards:[{ id:'machineFurnace1', count:1 }] },
                {	id:'tutMission3',	    type:'mission',	reqs:[{ id:'tutMission2', count:1 }],   label:'tutMission3', desc:'tutMission3Desc', costs:[{ id:'itemIronPlate', count:1 }], rewards:[{ id:'itemIronPlate', count:1 }] },
                {	id:'tutMission4',	    type:'mission',	reqs:[{ id:'tutMission3', count:1 }],   label:'tutMission4', desc:'tutMission4Desc', costs:[{ id:'machineMiner1', count:1 }], rewards:[{ id:'machineMiner1', count:1 }] },
                {	id:'tutMission5',	    type:'mission',	reqs:[{ id:'tutMission4', count:1 }],   label:'tutMission5', desc:'tutMission5Desc', costs:[{ id:'storerChest', count:1 }], rewards:[{ id:'storerChest', count:1 }] },
                {	id:'tutMission6',	    type:'mission',	reqs:[{ id:'tutMission5', count:1 }],   label:'tutMission6', desc:'tutMission6Desc', costs:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }], rewards:[{ id:'itemStone', count:100 },{ id:'itemIron', count:100 },{ id:'itemCoal', count:100 }] },
                //---
                {	id:'itemStone',		    type:'item',	                                        label:'itemStone', img:'img/items/Stone.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualStone', lines:[ 'lineStone1' ], },
                {	id:'recipeStone',	    type:'recipe',	                                        time:1,	outputs:[{ id:'itemStone', count:1 }] },
                {	id:'manualStone',	    type:'manual',	                                        recipeId:'recipeStone' },
                {	id:'lineStone1',	    type:'line',	reqs:[{ id:'tutMission4', count:1 }],   machineId:'machineMiner1', recipeId:'recipeStone' },
                //---
                {	id:'itemIron',		    type:'item',	reqs:[{ id:'tutMission2', count:1 }],   label:'itemIron', img:'img/items/Iron.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualIron', lines:[ 'lineIron1' ], },
                {	id:'recipeIron',	    type:'recipe',	reqs:[{ id:'tutMission2', count:1 }],   time:1,	outputs:[{ id:'itemIron', count:1 }] },
                {	id:'manualIron',	    type:'manual',	reqs:[{ id:'tutMission2', count:1 }],   recipeId:'recipeIron' },
                {	id:'lineIron1',	        type:'line',	reqs:[{ id:'tutMission4', count:1 }],   machineId:'machineMiner1', recipeId:'recipeIron' },
                //---
                {	id:'itemCoal',		    type:'item',	reqs:[{ id:'tutMission2', count:1 }],   label:'itemCoal', img:'img/items/Coal.png', storage:{ base:50, storerId:'storerChest' }, manualId:'manualCoal', lines:[ 'lineCoal1' ], },
                {	id:'recipeCoal',	    type:'recipe',	reqs:[{ id:'tutMission2', count:1 }],   time:1,	outputs:[{ id:'itemCoal', count:1 }] },
                {	id:'manualCoal',	    type:'manual',	reqs:[{ id:'tutMission2', count:1 }],   recipeId:'recipeCoal' },
                {	id:'lineCoal1',	        type:'line',	reqs:[{ id:'tutMission4', count:1 }],   machineId:'machineMiner1', recipeId:'recipeCoal' },
                //---
                {	id:'itemIronPlate',		type:'item',	reqs:[{ id:'tutMission2', count:1 }],   label:'itemIronPlate', img:'img/items/IronPlate.png', storage:{ base:100, storerId:'storerChest' }, lines:[ 'lineIronPlate1' ], },
                {	id:'recipeIronPlate',	type:'recipe',	reqs:[{ id:'tutMission2', count:1 }],   time:3.2,	outputs:[{ id:'itemIronPlate', count:1 }],	inputs:[{ id:'itemIron', count:1 }] },
                {	id:'lineIronPlate1',    type:'line',	reqs:[{ id:'tutMission2', count:1 }],   machineId:'machineFurnace1', recipeId:'recipeIronPlate' },
                //---
                {	id:'itemIronWheel',		type:'item',	reqs:[{ id:'tutMission3', count:1 }],   label:'itemIronWheel', img:'img/items/IronWheel.png', storage:{ base:100, storerId:'storerChest' }, manualId:'manualIronWheel' },
                {	id:'recipeIronWheel',	type:'recipe',	reqs:[{ id:'tutMission3', count:1 }],   time:1,	outputs:[{ id:'itemIronWheel', count:1 }],	inputs:[{ id:'itemIronPlate', count:2 }]	},
                {	id:'manualIronWheel',	type:'manual',	reqs:[{ id:'tutMission3', count:1 }],   recipeId:'recipeIronWheel' },
                //---
                {	id:'machineFurnace1',	type:'machine',	reqs:[{ id:'tutMission1', count:1 }],   label:'machineFurnace1',	img:'img/machines/Furnace1.png',	manualId:'manualFurnace1', speed:0.25,	energy:{ id:'itemCoal', count:0.02 } },
                {	id:'recipeFurnace1',	type:'recipe',	reqs:[{ id:'tutMission1', count:1 }],   time:2,	outputs:[{ id:'machineFurnace1', count:1 }], inputs:[{ id:'itemStone', count:5 }] },
                {	id:'manualFurnace1',	type:'manual',	reqs:[{ id:'tutMission1', count:1 }],   recipeId:'recipeFurnace1' },
                //---
                {	id:'machineMiner1',	    type:'machine',	reqs:[{ id:'tutMission3', count:1 }],   label:'machineMiner1',	img:'img/machines/Drill1.png',	manualId:'manualMiner1', speed:0.25,	energy:{ id:'itemCoal', count:0.04 } },
                {	id:'recipeMiner1',	    type:'recipe',	reqs:[{ id:'tutMission3', count:1 }],   time:2,	outputs:[{ id:'machineMiner1', count:1 }], inputs:[{ id:'itemIronWheel', count:3 },{ id:'itemIronPlate', count:3 },{ id:'machineFurnace1', count:1 }] },
                {	id:'manualMiner1',	    type:'manual',	reqs:[{ id:'tutMission3', count:1 }],   recipeId:'recipeMiner1' },
                //---
                {	id:'storerChest',	    type:'storer',	reqs:[{ id:'tutMission4', count:1 }],   label:'storerChest', img:'img/storers/Chest.png',	manualId:'manualChest' },
                {	id:'recipeChest',	    type:'recipe',	reqs:[{ id:'tutMission4', count:1 }],   time:1,	outputs:[{ id:'storerChest', count:1 }], inputs:[{ id:'itemIronPlate', count:8 }] },
                {	id:'manualChest',	    type:'manual',	reqs:[{ id:'tutMission4', count:1 }],   recipeId:'recipeChest' },
            ]
        }}
    ]
}
