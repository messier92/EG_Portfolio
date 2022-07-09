export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {
               name:'name',
               title:'Name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            },
            {
                name: 'startYear',
                title: 'Starting Year',
                type: 'date'
            }
    ]
}