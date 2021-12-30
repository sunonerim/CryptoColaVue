const erdTestData = [
    { 
      Id           : "123123127"   
      ,Type        : "DbcErdEntity"
      ,LogicalName : '선박 마스터' 
      ,PhysicalName: 'VESSEL_MASTER'      
      ,style:{
          left:"40px",
          top :"50px",
      }
      ,Columns : [
       {
        Id :"123155121",
         LogicalName  :"선적항"
        ,LogicalType  :"VARCHAR"
        ,LogicalLength: 20
        ,LogicalDefinition:"선적항의 코드 대산 DSN"
        ,PKey : true
        ,Domain       : "일시"
        ,Key          : "PK"     // PK FK NONE
        
        ,PhysicalName : "LoadPort"
        ,PhysicalType : "VLSFO"
        ,PhysicalLength: 20
        ,PhysicalDefinition:"선적항의 코드 대산 DSN"
        ,Style : {}
       },                       
       {
           Id :"123155122",
         LogicalName  :"유종 항차 대금 결제방법"
        ,LogicalType  :"CHAR"
        ,LogicalLength: 20
        ,LogicalDefinition:"선적항의 코드 대산 DSN"

        ,Domain       : "일시"
        ,Key          : "PK"     // PK FK NONE
        
        ,PhysicalName : "PymntMthd"
        ,PhysicalType : "VLSFO"
        ,PhysicalLength: 20
        ,PhysicalDefinition:"선적항의 코드 대산 DSN"
       },
       {
        Id :"123155123",
         LogicalName  : "선적 물량"
        ,LogicalType  : "NUMBER"
        ,LogicalLength: 20
        ,LogicalDefinition:"선적항의 코드 대산 DSN"

        ,Domain       : "일시"
        ,Key          : "FK"     // PK FK NONE
        
        ,PhysicalName : "LoadQty"
        ,PhysicalType : "NUMBER"
        ,PhysicalLength: 20
        ,PhysicalDefinition:"선적항의 코드 대산 DSN"
       },
       {
        Id              :"123155124",
         LogicalName    :"유종"
        ,LogicalType    :"String"
        ,LogicalLength  : 8
        ,LogicalDefinition:"유종"
        ,Domain         : "공통코드"                        
        
        ,PhysicalName   : "LtdOilKnd"
        ,PhysicalType   : "VARCHAR"
        ,PhysicalLength : 8
        ,PhysicalDefinition:"선적항의 코드 대산 DSN"
       },
       {
        Id             :"123155125",
        LogicalName    : "선적 시작 일시"
       ,LogicalType    : "VARCHAR"
       ,LogicalLength  : 8
       ,LogicalDefinition:"선적항의 코드 대산 DSN"

       ,Domain         : "일시"
       ,Key            : "NONE"     // PK FK NONE
       
       ,PhysicalName   : "LoadPort"
       ,PhysicalType   : "VLSFO"
       ,PhysicalLength : 20
       ,PhysicalDefinition:"선적항의 코드 대산 DSN"
      },
      {
        Id             :"34",
        LogicalName    : "선적 시작 일시"
       ,LogicalType    : "VARCHAR"
       ,LogicalLength  : 8
       ,LogicalDefinition:"선적항의 코드 대산 DSN"

       ,Domain         : "일시"
       ,Key            : "NONE"     // PK FK NONE
       
       ,PhysicalName   : "LoadPort"
       ,PhysicalType   : "VLSFO"
       ,PhysicalLength : 20
       ,PhysicalDefinition:"선적항의 코드 대산 DSN"
      },
      {
        Id             :"345",
        LogicalName    : "선적 시작 일시"
       ,LogicalType    : "VARCHAR"
       ,LogicalLength  : 8
       ,LogicalDefinition:"선적항의 코드 대산 DSN"

       ,Domain         : "일시"
       ,Key            : "NONE"     // PK FK NONE
       
       ,PhysicalName   : "LoadPort"
       ,PhysicalType   : "VLSFO"
       ,PhysicalLength : 20
       ,PhysicalDefinition:"선적항의 코드 대산 DSN"
      },
      {
        Id             :"346",
        LogicalName    : "선적 시작 일시"
       ,LogicalType    : "VARCHAR"
       ,LogicalLength  : 8
       ,LogicalDefinition:"선적항의 코드 대산 DSN"

       ,Domain         : "일시"
       ,Key            : "NONE"     // PK FK NONE
       
       ,PhysicalName   : "LoadPort"
       ,PhysicalType   : "VLSFO"
       ,PhysicalLength : 20
       ,PhysicalDefinition:"선적항의 코드 대산 DSN"
      },                         
       {
         Id             :"347",
         LogicalName    : "선적 시작 일시"
        ,LogicalType    : "VARCHAR"
        ,LogicalLength  : 8
        ,LogicalDefinition:"선적항의 코드 대산 DSN"

        ,Domain         : "일시"
        ,Key            : "NONE"     // PK FK NONE
        
        ,PhysicalName   : "LoadPort"
        ,PhysicalType   : "VLSFO"
        ,PhysicalLength : 20
        ,PhysicalDefinition:"선적항의 코드 대산 DSN"
       },
      {
        Id :"723155124"
        ,LogicalName  : "선적 종료 일시"
        ,LogicalType  : "VARCHAR"
        ,LogicalLength: 8
        ,LogicalDefinition:"선적항의 코드 대산 DSN"
        ,Domain       : "일시"
        ,Key          : "NO"     // PK FK NONE                        
        ,PhysicalName : "LoadPort"
        ,PhysicalType : "VARCHAR"
        ,PhysicalLength: 20
        ,PhysicalDefinition:"선적항의 코드 대산 DSN"                        
       }]
    },
    { 
        Id           : "33333"   
        ,Type        : "DbcErdEntity"
        ,LogicalName : '선박 마스터' 
        ,PhysicalName: 'VESSEL_MASTER'
        ,style:{
            left:"500px",
            top :"250px",
        }
        ,Columns : [
         {
          Id :"123155121",
           LogicalName  :"선적항"
          ,LogicalType  :"VARCHAR"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
          ,PKey : true
          ,Domain       : "일시"
          ,Key          : "PK"     // PK FK NONE
          
          ,PhysicalName : "LoadPort"
          ,PhysicalType : "VLSFO"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
          ,Style : {}
         },                       
         {
             Id :"123155122",
           LogicalName  :"유종 항차 대금 결제방법"
          ,LogicalType  :"CHAR"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain       : "일시"
          ,Key          : "PK"     // PK FK NONE
          
          ,PhysicalName : "PymntMthd"
          ,PhysicalType : "VLSFO"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
          Id :"123155123",
           LogicalName  : "선적 물량"
          ,LogicalType  : "NUMBER"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain       : "일시"
          ,Key          : "FK"     // PK FK NONE
          
          ,PhysicalName : "LoadQty"
          ,PhysicalType : "NUMBER"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
          Id              :"123155124",
           LogicalName    :"유종"
          ,LogicalType    :"String"
          ,LogicalLength  : 8
          ,LogicalDefinition:"유종"
          ,Domain         : "공통코드"                        
          
          ,PhysicalName   : "LtdOilKnd"
          ,PhysicalType   : "VARCHAR"
          ,PhysicalLength : 8
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
           Id             :"123155125",
           LogicalName    : "선적 시작 일시"
          ,LogicalType    : "VARCHAR"
          ,LogicalLength  : 8
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain         : "일시"
          ,Key            : "NONE"     // PK FK NONE
          
          ,PhysicalName   : "LoadPort"
          ,PhysicalType   : "VLSFO"
          ,PhysicalLength : 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
        {
          Id :"723155124"
          ,LogicalName  : "선적 종료 일시"
          ,LogicalType  : "VARCHAR"
          ,LogicalLength: 8
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
          ,Domain       : "일시"
          ,Key          : "NO"     // PK FK NONE                        
          ,PhysicalName : "LoadPort"
          ,PhysicalType : "VARCHAR"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"                        
         }]
    },
    { 
        Id           : "55555"   
        ,Type        : "DbcErdEntity"
        ,LogicalName : '선박 마스터' 
        ,PhysicalName: 'VESSEL_MASTER'
        ,style:{
            left:"100px",
            top :"400px",
        }
        ,Columns : [
         {
          Id :"123155121",
           LogicalName  :"선적항"
          ,LogicalType  :"VARCHAR"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
          ,PKey : true
          ,Domain       : "일시"
          ,Key          : "PK"     // PK FK NONE
          
          ,PhysicalName : "LoadPort"
          ,PhysicalType : "VLSFO"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
          ,Style : {}
         },                       
         {
             Id :"123155122",
           LogicalName  :"유종 항차 대금 결제방법"
          ,LogicalType  :"CHAR"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain       : "일시"
          ,Key          : "PK"     // PK FK NONE
          
          ,PhysicalName : "PymntMthd"
          ,PhysicalType : "VLSFO"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
          Id :"123155123",
           LogicalName  : "선적 물량"
          ,LogicalType  : "NUMBER"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain       : "일시"
          ,Key          : "FK"     // PK FK NONE
          
          ,PhysicalName : "LoadQty"
          ,PhysicalType : "NUMBER"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
          Id              :"123155124",
           LogicalName    :"유종"
          ,LogicalType    :"String"
          ,LogicalLength  : 8
          ,LogicalDefinition:"유종"
          ,Domain         : "공통코드"                        
          
          ,PhysicalName   : "LtdOilKnd"
          ,PhysicalType   : "VARCHAR"
          ,PhysicalLength : 8
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
           Id             :"123155125",
           LogicalName    : "선적 시작 일시"
          ,LogicalType    : "VARCHAR"
          ,LogicalLength  : 8
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain         : "일시"
          ,Key            : "NONE"     // PK FK NONE
          
          ,PhysicalName   : "LoadPort"
          ,PhysicalType   : "VLSFO"
          ,PhysicalLength : 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
        {
          Id :"723155124"
          ,LogicalName  : "선적 종료 일시"
          ,LogicalType  : "VARCHAR"
          ,LogicalLength: 8
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
          ,Domain       : "일시"
          ,Key          : "NO"     // PK FK NONE                        
          ,PhysicalName : "LoadPort"
          ,PhysicalType : "VARCHAR"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"                        
         }]
    },
    { 
        Id           : "66666"   
        ,Type        : "DbcErdEntity"
        ,LogicalName : '선적계획' 
        ,PhysicalName: 'VESSEL_MASTER'
        ,style:{
            left:"320px",
            top :"100px",
        }
        ,Columns : [
         {
          Id :"123155121",
           LogicalName  :"선적항"
          ,LogicalType  :"VARCHAR"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
          ,PKey : true
          ,Domain       : "일시"
          ,Key          : "PK"     // PK FK NONE
          
          ,PhysicalName : "LoadPort"
          ,PhysicalType : "VLSFO"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
          ,Style : {}
         },                       
         {
             Id :"123155122",
           LogicalName  :"유종 항차 대금 결제방법"
          ,LogicalType  :"CHAR"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain       : "일시"
          ,Key          : "PK"     // PK FK NONE
          
          ,PhysicalName : "PymntMthd"
          ,PhysicalType : "VLSFO"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
          Id :"123155123",
           LogicalName  : "선적 물량"
          ,LogicalType  : "NUMBER"
          ,LogicalLength: 20
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain       : "일시"
          ,Key          : "FK"     // PK FK NONE
          
          ,PhysicalName : "LoadQty"
          ,PhysicalType : "NUMBER"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
          Id              :"123155124",
           LogicalName    :"유종"
          ,LogicalType    :"String"
          ,LogicalLength  : 8
          ,LogicalDefinition:"유종"
          ,Domain         : "공통코드"                        
          
          ,PhysicalName   : "LtdOilKnd"
          ,PhysicalType   : "VARCHAR"
          ,PhysicalLength : 8
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
         {
           Id             :"123155125",
           LogicalName    : "선적 시작 일시"
          ,LogicalType    : "VARCHAR"
          ,LogicalLength  : 8
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
  
          ,Domain         : "일시"
          ,Key            : "NONE"     // PK FK NONE
          
          ,PhysicalName   : "LoadPort"
          ,PhysicalType   : "VLSFO"
          ,PhysicalLength : 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"
         },
        {
          Id :"723155124"
          ,LogicalName  : "선적 종료 일시"
          ,LogicalType  : "VARCHAR"
          ,LogicalLength: 8
          ,LogicalDefinition:"선적항의 코드 대산 DSN"
          ,Domain       : "일시"
          ,Key          : "NO"     // PK FK NONE                        
          ,PhysicalName : "LoadPort"
          ,PhysicalType : "VARCHAR"
          ,PhysicalLength: 20
          ,PhysicalDefinition:"선적항의 코드 대산 DSN"                        
         },
        ]
    },
 
    
  ];

  export default erdTestData;