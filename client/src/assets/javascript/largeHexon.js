import * as THREE from 'three'


export const largeHexon = () => {
    let scene       = new THREE.Scene()
    let ctx         = new THREE.Shape() 
    let hexagon     = draw(ctx)
    let geometry    = new THREE.ExtrudeGeometry(
        hexagon, 
        {
             bevelEnabled: false, 
             bevelSegments: 0, 
             steps:20, 
             amount: 80,
        })
    let ctxMesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
        color: 0x333333,
        shading: THREE.FlatShading,                   
    }))
    scene.add(hexagon)
    
}

const draw = (ctx) => {
    
    // layer1/Path
    ctx.moveTo(0.0, 992.2)
    ctx.bezierCurveTo(6.4, 994.6, 13.6, 995.8, 19.7, 999.0)
    ctx.bezierCurveTo(37.7, 1008.2, 55.0, 1018.6, 73.0, 1027.9)
    ctx.bezierCurveTo(83.1, 1033.1, 88.3, 1039.9, 88.3, 1051.1)
    ctx.bezierCurveTo(88.3, 1072.8, 88.3, 1094.9, 88.3, 1116.5)
    ctx.bezierCurveTo(88.3, 1125.8, 85.5, 1133.0, 76.6, 1137.8)
    ctx.bezierCurveTo(55.4, 1149.0, 34.5, 1160.7, 13.2, 1171.9)
    ctx.bezierCurveTo(9.6, 1173.9, 4.8, 1174.3, 0.4, 1175.5)
    ctx.bezierCurveTo(0.0, 1114.1, 0.0, 1053.1, 0.0, 992.2)
    
    ctx.fillStyle = 'rgb(210, 210, 210)'
    

    // layer1/Path
    
    ctx.moveTo(0.0, 373.9)
    ctx.bezierCurveTo(6.8, 373.9, 12.4, 376.3, 18.1, 379.5)
    ctx.bezierCurveTo(36.9, 389.9, 55.4, 400.3, 74.2, 410.4)
    ctx.bezierCurveTo(83.9, 415.2, 87.9, 422.4, 87.9, 432.4)
    ctx.bezierCurveTo(87.5, 454.1, 87.5, 476.2, 87.9, 497.8)
    ctx.bezierCurveTo(87.9, 507.9, 84.3, 515.1, 74.6, 519.9)
    ctx.bezierCurveTo(55.8, 529.9, 36.9, 540.4, 18.1, 550.4)
    ctx.bezierCurveTo(12.4, 553.2, 6.0, 554.8, 0.4, 556.8)
    ctx.bezierCurveTo(0.0, 495.8, 0.0, 434.8, 0.0, 373.9)
    
    

    // layer1/Path
    
    ctx.moveTo(0.0, 66.5)
    ctx.bezierCurveTo(5.2, 64.5, 10.0, 66.1, 14.8, 68.5)
    ctx.bezierCurveTo(34.9, 79.4, 55.0, 90.6, 75.0, 101.0)
    ctx.bezierCurveTo(83.9, 105.8, 87.9, 112.7, 87.9, 121.9)
    ctx.bezierCurveTo(87.9, 144.4, 87.9, 166.8, 87.9, 189.7)
    ctx.bezierCurveTo(87.9, 199.3, 83.9, 205.7, 75.0, 210.6)
    ctx.bezierCurveTo(55.4, 221.0, 36.1, 231.8, 16.5, 242.7)
    ctx.bezierCurveTo(11.2, 245.1, 6.0, 247.9, 0.0, 245.9)
    ctx.bezierCurveTo(0.0, 186.1, 0.0, 126.3, 0.0, 66.5)
    
    

    // layer1/Path
    
    ctx.moveTo(0.0, 684.8)
    ctx.bezierCurveTo(6.0, 682.8, 11.2, 685.2, 16.5, 688.0)
    ctx.bezierCurveTo(36.5, 698.9, 56.2, 709.7, 76.2, 720.5)
    ctx.bezierCurveTo(83.9, 724.5, 87.5, 730.2, 87.9, 738.2)
    ctx.bezierCurveTo(87.9, 762.3, 87.9, 786.7, 87.9, 810.8)
    ctx.bezierCurveTo(87.9, 818.0, 84.7, 823.6, 77.8, 827.3)
    ctx.bezierCurveTo(56.2, 838.9, 34.9, 850.9, 13.2, 862.6)
    ctx.bezierCurveTo(9.2, 864.6, 5.2, 866.2, 0.4, 864.2)
    ctx.bezierCurveTo(0.0, 804.4, 0.0, 744.6, 0.0, 684.8)
    
    

    // layer1/Path
    
    ctx.moveTo(1648.3, 0.7)
    ctx.bezierCurveTo(1648.3, 11.6, 1648.3, 22.4, 1648.3, 33.6)
    ctx.bezierCurveTo(1648.3, 43.6, 1644.2, 50.9, 1634.6, 55.7)
    ctx.bezierCurveTo(1614.5, 66.1, 1594.5, 77.0, 1574.8, 88.2)
    ctx.bezierCurveTo(1566.0, 93.0, 1558.4, 93.0, 1550.0, 88.2)
    ctx.bezierCurveTo(1530.3, 77.0, 1510.2, 66.1, 1490.2, 55.7)
    ctx.bezierCurveTo(1480.9, 50.9, 1476.5, 43.6, 1476.5, 33.6)
    ctx.bezierCurveTo(1476.5, 22.8, 1475.7, 12.0, 1474.9, 1.1)
    ctx.bezierCurveTo(1532.7, 0.7, 1590.5, 0.7, 1648.3, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(916.4, 0.7)
    ctx.bezierCurveTo(916.0, 10.7, 914.8, 21.2, 915.2, 31.6)
    ctx.bezierCurveTo(915.6, 43.2, 910.4, 50.9, 899.6, 56.5)
    ctx.bezierCurveTo(879.9, 66.9, 860.6, 77.4, 841.4, 88.2)
    ctx.bezierCurveTo(833.0, 93.0, 824.9, 93.4, 816.5, 88.2)
    ctx.bezierCurveTo(796.8, 77.0, 776.8, 66.1, 756.7, 55.7)
    ctx.bezierCurveTo(747.1, 50.9, 743.1, 43.6, 743.1, 33.6)
    ctx.bezierCurveTo(743.1, 22.8, 743.1, 12.0, 743.1, 0.7)
    ctx.bezierCurveTo(800.9, 0.7, 858.6, 0.7, 916.4, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1833.2, 0.7)
    ctx.bezierCurveTo(1833.2, 11.6, 1832.8, 22.4, 1832.8, 33.6)
    ctx.bezierCurveTo(1832.8, 43.6, 1828.8, 50.9, 1819.2, 55.7)
    ctx.bezierCurveTo(1798.7, 66.5, 1777.9, 77.8, 1757.8, 89.0)
    ctx.bezierCurveTo(1750.2, 93.0, 1743.7, 93.0, 1736.1, 89.0)
    ctx.bezierCurveTo(1715.3, 77.4, 1694.0, 66.1, 1673.1, 54.5)
    ctx.bezierCurveTo(1665.1, 50.1, 1661.5, 43.6, 1661.5, 35.2)
    ctx.bezierCurveTo(1661.5, 23.6, 1660.7, 12.4, 1660.3, 0.7)
    ctx.bezierCurveTo(1717.7, 0.7, 1775.4, 0.7, 1833.2, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(365.9, 0.7)
    ctx.bezierCurveTo(365.9, 12.4, 365.5, 24.0, 365.5, 35.2)
    ctx.bezierCurveTo(365.5, 44.1, 361.5, 50.5, 353.9, 54.5)
    ctx.bezierCurveTo(332.2, 66.1, 310.6, 77.8, 288.9, 89.8)
    ctx.bezierCurveTo(282.9, 93.0, 276.8, 93.0, 270.8, 89.8)
    ctx.bezierCurveTo(249.2, 78.2, 227.5, 66.1, 205.8, 54.5)
    ctx.bezierCurveTo(198.6, 50.5, 194.6, 44.9, 194.6, 36.8)
    ctx.bezierCurveTo(194.6, 28.4, 194.6, 20.0, 194.2, 11.6)
    ctx.bezierCurveTo(194.2, 7.9, 193.0, 4.3, 192.6, 0.7)
    ctx.bezierCurveTo(250.4, 0.7, 308.1, 0.7, 365.9, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1282.3, 0.7)
    ctx.bezierCurveTo(1281.9, 11.6, 1280.7, 22.4, 1280.7, 33.2)
    ctx.bezierCurveTo(1281.1, 44.5, 1276.3, 51.3, 1266.3, 56.5)
    ctx.bezierCurveTo(1246.6, 66.5, 1227.4, 77.0, 1208.1, 88.2)
    ctx.bezierCurveTo(1199.3, 93.0, 1191.7, 93.0, 1183.2, 88.2)
    ctx.bezierCurveTo(1163.6, 77.0, 1143.5, 66.1, 1123.4, 55.7)
    ctx.bezierCurveTo(1115.0, 51.3, 1110.6, 44.9, 1110.6, 35.2)
    ctx.bezierCurveTo(1110.6, 24.0, 1109.4, 12.4, 1109.0, 0.7)
    ctx.bezierCurveTo(1166.8, 0.7, 1224.6, 0.7, 1282.3, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(2014.2, 0.7)
    ctx.bezierCurveTo(2014.2, 12.8, 2014.2, 24.8, 2014.6, 37.2)
    ctx.bezierCurveTo(2014.6, 44.9, 2011.4, 50.1, 2004.9, 53.7)
    ctx.bezierCurveTo(1982.9, 65.7, 1960.8, 77.8, 1938.7, 89.8)
    ctx.bezierCurveTo(1931.9, 93.8, 1925.5, 92.6, 1919.1, 89.0)
    ctx.bezierCurveTo(1904.2, 81.0, 1889.4, 72.5, 1874.1, 64.5)
    ctx.bezierCurveTo(1868.5, 61.3, 1863.3, 58.5, 1857.7, 55.7)
    ctx.bezierCurveTo(1848.9, 51.3, 1844.5, 44.9, 1844.9, 35.2)
    ctx.bezierCurveTo(1845.3, 23.6, 1845.3, 12.4, 1845.3, 0.7)
    ctx.bezierCurveTo(1901.4, 0.7, 1958.0, 0.7, 2014.2, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(181.0, 0.7)
    ctx.bezierCurveTo(181.0, 12.4, 180.6, 23.6, 181.0, 35.2)
    ctx.bezierCurveTo(181.4, 44.1, 176.9, 50.5, 169.3, 54.5)
    ctx.bezierCurveTo(147.7, 66.1, 126.0, 77.8, 104.3, 89.4)
    ctx.bezierCurveTo(98.3, 92.6, 92.3, 92.6, 86.3, 89.4)
    ctx.bezierCurveTo(64.6, 77.8, 42.9, 66.1, 21.3, 54.5)
    ctx.bezierCurveTo(14.0, 50.5, 10.0, 44.9, 10.0, 36.8)
    ctx.bezierCurveTo(10.0, 24.8, 10.8, 12.8, 11.2, 0.7)
    ctx.bezierCurveTo(67.8, 0.7, 124.4, 0.7, 181.0, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(546.9, 0.7)
    ctx.bezierCurveTo(546.9, 12.4, 547.3, 23.6, 547.3, 35.2)
    ctx.bezierCurveTo(547.7, 44.1, 544.1, 50.5, 536.0, 54.9)
    ctx.bezierCurveTo(514.4, 66.5, 492.7, 78.2, 471.0, 89.8)
    ctx.bezierCurveTo(465.0, 93.0, 459.0, 93.0, 453.0, 89.8)
    ctx.bezierCurveTo(430.9, 77.8, 408.9, 65.7, 386.8, 53.7)
    ctx.bezierCurveTo(380.4, 50.1, 377.2, 44.5, 377.2, 37.2)
    ctx.bezierCurveTo(377.6, 25.2, 377.2, 13.2, 377.2, 0.7)
    ctx.bezierCurveTo(433.7, 0.7, 490.3, 0.7, 546.9, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(731.8, 0.7)
    ctx.bezierCurveTo(731.8, 11.6, 731.8, 22.8, 731.8, 33.6)
    ctx.bezierCurveTo(732.2, 43.6, 728.2, 50.9, 718.6, 56.1)
    ctx.bezierCurveTo(698.1, 66.5, 678.1, 77.4, 658.4, 88.6)
    ctx.bezierCurveTo(650.4, 93.4, 643.2, 93.0, 635.1, 88.6)
    ctx.bezierCurveTo(615.1, 77.4, 595.4, 66.5, 575.0, 55.7)
    ctx.bezierCurveTo(565.3, 50.9, 560.9, 44.1, 561.7, 33.6)
    ctx.bezierCurveTo(562.5, 22.8, 562.1, 11.6, 562.5, 0.7)
    ctx.bezierCurveTo(618.7, 0.7, 675.3, 0.7, 731.8, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1097.8, 0.7)
    ctx.bezierCurveTo(1098.2, 10.3, 1098.2, 20.0, 1099.4, 29.6)
    ctx.bezierCurveTo(1100.6, 42.8, 1095.0, 51.3, 1082.9, 57.3)
    ctx.bezierCurveTo(1066.9, 64.9, 1051.6, 74.1, 1036.4, 82.2)
    ctx.bezierCurveTo(1032.0, 84.6, 1027.6, 87.0, 1023.1, 89.4)
    ctx.bezierCurveTo(1017.1, 93.0, 1011.1, 93.0, 1005.1, 89.4)
    ctx.bezierCurveTo(983.0, 77.4, 960.9, 65.3, 938.5, 53.3)
    ctx.bezierCurveTo(931.3, 49.3, 928.4, 42.8, 928.4, 34.8)
    ctx.bezierCurveTo(928.4, 23.2, 928.4, 12.0, 928.4, 0.3)
    ctx.bezierCurveTo(984.6, 0.7, 1041.2, 0.7, 1097.8, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1463.7, 0.7)
    ctx.bezierCurveTo(1464.1, 13.6, 1464.5, 26.0, 1464.9, 38.8)
    ctx.bezierCurveTo(1464.9, 45.7, 1461.3, 50.5, 1455.7, 53.7)
    ctx.bezierCurveTo(1450.0, 56.9, 1444.4, 59.7, 1438.8, 62.5)
    ctx.bezierCurveTo(1423.2, 70.9, 1407.5, 79.4, 1392.3, 88.2)
    ctx.bezierCurveTo(1384.2, 92.6, 1377.0, 92.6, 1369.0, 88.2)
    ctx.bezierCurveTo(1348.9, 77.0, 1328.9, 66.1, 1308.8, 55.7)
    ctx.bezierCurveTo(1299.6, 50.9, 1295.2, 43.6, 1295.2, 33.6)
    ctx.bezierCurveTo(1295.6, 22.8, 1294.8, 11.6, 1294.4, 0.7)
    ctx.bezierCurveTo(1350.5, 0.7, 1407.1, 0.7, 1463.7, 0.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1563.6, 527.9)
    ctx.bezierCurveTo(1569.2, 530.7, 1575.6, 533.2, 1581.6, 536.4)
    ctx.bezierCurveTo(1598.5, 545.2, 1615.0, 554.8, 1631.8, 563.6)
    ctx.bezierCurveTo(1644.2, 569.7, 1649.5, 578.5, 1649.1, 591.3)
    ctx.bezierCurveTo(1648.3, 611.0, 1648.7, 630.2, 1649.1, 649.9)
    ctx.bezierCurveTo(1649.5, 661.5, 1644.6, 669.2, 1633.8, 674.8)
    ctx.bezierCurveTo(1615.8, 684.0, 1597.7, 693.6, 1580.4, 704.1)
    ctx.bezierCurveTo(1568.8, 710.9, 1558.8, 711.7, 1546.7, 704.5)
    ctx.bezierCurveTo(1529.5, 694.0, 1511.4, 684.4, 1493.4, 675.2)
    ctx.bezierCurveTo(1482.1, 669.2, 1476.5, 661.5, 1476.9, 648.7)
    ctx.bezierCurveTo(1477.7, 628.6, 1477.3, 608.6, 1476.9, 588.5)
    ctx.bezierCurveTo(1476.9, 578.1, 1480.9, 570.9, 1490.2, 566.1)
    ctx.bezierCurveTo(1512.2, 554.0, 1534.7, 542.0, 1557.2, 530.3)
    ctx.bezierCurveTo(1558.4, 529.1, 1560.4, 528.7, 1563.6, 527.9)
    
    

    // layer1/Path
    
    ctx.moveTo(1832.8, 619.8)
    ctx.bezierCurveTo(1832.8, 630.6, 1832.8, 641.9, 1832.8, 652.7)
    ctx.bezierCurveTo(1832.8, 662.3, 1828.8, 668.8, 1820.0, 673.6)
    ctx.bezierCurveTo(1799.9, 684.4, 1779.9, 695.2, 1760.2, 706.5)
    ctx.bezierCurveTo(1750.6, 711.7, 1742.1, 711.3, 1733.3, 706.1)
    ctx.bezierCurveTo(1714.1, 695.2, 1694.8, 684.4, 1675.1, 674.0)
    ctx.bezierCurveTo(1665.9, 668.8, 1661.5, 661.9, 1661.5, 651.5)
    ctx.bezierCurveTo(1661.9, 630.2, 1661.9, 609.0, 1661.5, 587.7)
    ctx.bezierCurveTo(1661.5, 577.3, 1665.9, 570.5, 1675.1, 565.6)
    ctx.bezierCurveTo(1695.2, 554.8, 1715.3, 544.4, 1735.3, 533.2)
    ctx.bezierCurveTo(1743.3, 528.7, 1750.6, 528.3, 1758.6, 532.7)
    ctx.bezierCurveTo(1778.7, 544.0, 1798.7, 554.4, 1818.8, 565.2)
    ctx.bezierCurveTo(1828.4, 570.5, 1834.0, 577.7, 1833.2, 588.9)
    ctx.bezierCurveTo(1832.4, 599.0, 1832.8, 609.4, 1832.8, 619.8)
    
    

    // layer1/Path
    
    ctx.moveTo(639.2, 1084.0)
    ctx.bezierCurveTo(639.2, 1096.1, 638.8, 1108.5, 639.2, 1120.6)
    ctx.bezierCurveTo(639.6, 1128.2, 635.9, 1133.4, 629.1, 1137.0)
    ctx.bezierCurveTo(621.5, 1141.4, 613.5, 1145.4, 605.9, 1149.8)
    ctx.bezierCurveTo(592.6, 1157.1, 579.4, 1164.3, 566.1, 1171.9)
    ctx.bezierCurveTo(558.1, 1176.3, 550.9, 1176.3, 542.9, 1171.9)
    ctx.bezierCurveTo(522.4, 1160.3, 501.9, 1149.4, 481.5, 1138.2)
    ctx.bezierCurveTo(473.5, 1133.8, 469.8, 1128.2, 469.8, 1118.9)
    ctx.bezierCurveTo(470.2, 1095.3, 470.2, 1071.6, 469.8, 1047.9)
    ctx.bezierCurveTo(469.8, 1039.5, 473.1, 1034.3, 480.3, 1029.9)
    ctx.bezierCurveTo(500.7, 1018.6, 521.2, 1007.4, 541.7, 996.2)
    ctx.bezierCurveTo(550.1, 991.4, 558.5, 991.4, 566.9, 996.2)
    ctx.bezierCurveTo(587.4, 1007.4, 607.9, 1018.6, 628.3, 1029.9)
    ctx.bezierCurveTo(635.5, 1033.9, 639.2, 1039.5, 639.2, 1047.9)
    ctx.bezierCurveTo(638.8, 1060.0, 639.2, 1072.0, 639.2, 1084.0)
    ctx.lineTo(639.2, 1084.0)
    
    

    // layer1/Path
    
    ctx.moveTo(2106.9, 1084.0)
    ctx.bezierCurveTo(2106.9, 1094.9, 2106.1, 1106.1, 2107.3, 1116.9)
    ctx.bezierCurveTo(2108.5, 1127.8, 2103.2, 1134.2, 2094.0, 1139.0)
    ctx.bezierCurveTo(2086.8, 1142.6, 2079.6, 1147.0, 2072.4, 1150.6)
    ctx.bezierCurveTo(2059.1, 1157.9, 2045.5, 1164.7, 2032.2, 1172.3)
    ctx.bezierCurveTo(2025.4, 1175.9, 2019.0, 1176.3, 2012.2, 1172.3)
    ctx.bezierCurveTo(1990.5, 1160.3, 1968.8, 1148.6, 1947.2, 1137.0)
    ctx.bezierCurveTo(1940.3, 1133.4, 1937.5, 1128.2, 1937.5, 1120.6)
    ctx.bezierCurveTo(1937.5, 1095.7, 1937.5, 1070.8, 1937.5, 1045.9)
    ctx.bezierCurveTo(1937.5, 1039.1, 1940.3, 1034.3, 1946.4, 1030.7)
    ctx.bezierCurveTo(1968.0, 1019.0, 1989.7, 1007.0, 2011.4, 995.0)
    ctx.bezierCurveTo(2018.6, 991.0, 2025.8, 991.0, 2033.0, 995.0)
    ctx.bezierCurveTo(2054.7, 1007.0, 2076.4, 1018.6, 2098.0, 1030.7)
    ctx.bezierCurveTo(2104.9, 1034.3, 2107.3, 1039.9, 2107.3, 1047.5)
    ctx.bezierCurveTo(2106.5, 1060.0, 2106.9, 1072.0, 2106.9, 1084.0)
    
    

    // layer1/Path
    
    ctx.moveTo(1654.7, 249.9)
    ctx.bezierCurveTo(1641.0, 242.7, 1628.6, 235.8, 1616.6, 229.4)
    ctx.bezierCurveTo(1604.5, 222.6, 1592.1, 215.8, 1580.0, 209.4)
    ctx.bezierCurveTo(1573.2, 205.7, 1570.0, 200.5, 1570.0, 192.9)
    ctx.bezierCurveTo(1570.0, 168.4, 1570.0, 144.4, 1570.0, 119.9)
    ctx.bezierCurveTo(1570.0, 111.9, 1573.6, 106.2, 1581.2, 102.2)
    ctx.bezierCurveTo(1601.7, 91.0, 1622.6, 79.8, 1642.6, 68.5)
    ctx.bezierCurveTo(1651.1, 63.7, 1659.5, 63.7, 1667.9, 68.5)
    ctx.bezierCurveTo(1688.4, 79.8, 1708.8, 91.0, 1729.7, 102.2)
    ctx.bezierCurveTo(1737.3, 106.2, 1740.1, 112.3, 1740.1, 120.3)
    ctx.bezierCurveTo(1740.1, 144.0, 1740.1, 167.6, 1740.1, 191.3)
    ctx.bezierCurveTo(1740.1, 198.5, 1738.1, 204.5, 1731.3, 208.6)
    ctx.bezierCurveTo(1706.0, 222.2, 1681.6, 236.6, 1654.7, 249.9)
    
    

    // layer1/Path
    
    ctx.moveTo(828.9, 526.7)
    ctx.bezierCurveTo(846.2, 536.0, 861.4, 544.4, 877.1, 552.8)
    ctx.bezierCurveTo(884.7, 557.2, 892.7, 561.2, 900.4, 565.2)
    ctx.bezierCurveTo(910.0, 570.5, 915.2, 577.7, 914.8, 588.9)
    ctx.bezierCurveTo(914.4, 609.8, 914.4, 630.2, 914.8, 651.1)
    ctx.bezierCurveTo(914.8, 661.5, 910.8, 668.8, 901.6, 673.6)
    ctx.bezierCurveTo(881.5, 684.4, 861.4, 695.2, 841.8, 706.5)
    ctx.bezierCurveTo(832.2, 711.7, 823.7, 710.9, 814.9, 706.1)
    ctx.bezierCurveTo(795.6, 695.2, 776.4, 684.4, 756.7, 674.0)
    ctx.bezierCurveTo(747.1, 668.8, 743.1, 661.5, 743.5, 651.5)
    ctx.bezierCurveTo(743.9, 630.2, 743.9, 609.0, 743.5, 587.7)
    ctx.bezierCurveTo(743.5, 579.3, 746.3, 572.1, 754.3, 567.7)
    ctx.bezierCurveTo(778.4, 554.0, 802.9, 540.8, 828.9, 526.7)
    
    

    // layer1/Path
    
    ctx.moveTo(187.8, 249.1)
    ctx.bezierCurveTo(183.4, 247.1, 178.5, 245.5, 174.1, 243.1)
    ctx.bezierCurveTo(154.9, 232.6, 135.6, 221.4, 116.0, 211.0)
    ctx.bezierCurveTo(107.1, 206.1, 102.7, 200.5, 103.1, 190.5)
    ctx.bezierCurveTo(103.5, 167.2, 103.5, 144.4, 103.1, 121.1)
    ctx.bezierCurveTo(103.1, 111.1, 107.1, 105.4, 116.0, 100.6)
    ctx.bezierCurveTo(135.6, 90.2, 154.9, 79.8, 174.1, 68.9)
    ctx.bezierCurveTo(183.4, 63.7, 191.8, 63.3, 201.0, 68.9)
    ctx.bezierCurveTo(221.1, 80.2, 241.1, 91.0, 261.2, 101.8)
    ctx.bezierCurveTo(270.0, 106.6, 273.6, 113.1, 273.2, 122.7)
    ctx.bezierCurveTo(272.8, 145.2, 272.8, 167.6, 273.2, 190.1)
    ctx.bezierCurveTo(273.2, 198.9, 270.4, 205.3, 262.4, 209.8)
    ctx.bezierCurveTo(239.9, 221.8, 217.9, 233.8, 195.8, 245.9)
    ctx.bezierCurveTo(193.0, 247.1, 190.6, 247.9, 187.8, 249.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1739.7, 1084.0)
    ctx.bezierCurveTo(1739.7, 1095.7, 1739.7, 1107.3, 1739.7, 1118.5)
    ctx.bezierCurveTo(1739.7, 1127.4, 1736.1, 1133.4, 1728.1, 1137.8)
    ctx.bezierCurveTo(1706.8, 1149.0, 1686.0, 1160.7, 1664.7, 1172.3)
    ctx.bezierCurveTo(1657.9, 1175.9, 1651.5, 1175.9, 1644.6, 1172.3)
    ctx.bezierCurveTo(1623.0, 1160.3, 1601.3, 1148.6, 1579.6, 1136.6)
    ctx.bezierCurveTo(1572.0, 1132.6, 1569.2, 1126.6, 1569.2, 1118.5)
    ctx.bezierCurveTo(1569.2, 1094.9, 1569.2, 1071.2, 1569.2, 1047.5)
    ctx.bezierCurveTo(1569.2, 1039.5, 1572.8, 1033.9, 1580.4, 1029.9)
    ctx.bezierCurveTo(1600.9, 1018.6, 1621.4, 1007.4, 1641.8, 996.2)
    ctx.bezierCurveTo(1649.5, 991.8, 1657.1, 990.6, 1665.5, 995.4)
    ctx.bezierCurveTo(1687.2, 1007.4, 1708.8, 1019.0, 1730.5, 1030.7)
    ctx.bezierCurveTo(1737.3, 1034.3, 1739.7, 1040.7, 1739.7, 1047.5)
    ctx.bezierCurveTo(1740.1, 1059.6, 1739.7, 1072.0, 1739.7, 1084.0)
    ctx.lineTo(1739.7, 1084.0)
    
    

    // layer1/Path
    
    ctx.moveTo(278.9, 527.9)
    ctx.bezierCurveTo(282.5, 529.1, 285.7, 529.9, 288.5, 531.5)
    ctx.bezierCurveTo(309.7, 542.8, 331.0, 554.4, 351.9, 565.7)
    ctx.bezierCurveTo(361.1, 570.5, 365.9, 577.3, 365.5, 587.7)
    ctx.bezierCurveTo(364.7, 609.0, 365.1, 630.2, 365.5, 651.5)
    ctx.bezierCurveTo(365.9, 661.9, 361.1, 668.8, 351.9, 673.6)
    ctx.bezierCurveTo(331.8, 684.4, 311.8, 695.2, 291.7, 706.5)
    ctx.bezierCurveTo(282.9, 711.3, 274.8, 711.3, 266.4, 706.1)
    ctx.bezierCurveTo(246.4, 694.8, 226.7, 684.0, 206.6, 673.2)
    ctx.bezierCurveTo(197.8, 668.4, 193.8, 661.5, 194.2, 652.3)
    ctx.bezierCurveTo(194.2, 630.2, 194.2, 608.6, 194.2, 586.5)
    ctx.bezierCurveTo(194.2, 578.9, 196.2, 572.1, 203.4, 567.7)
    ctx.bezierCurveTo(228.7, 554.4, 253.2, 540.0, 278.9, 527.9)
    
    

    // layer1/Path
    
    ctx.moveTo(102.7, 1082.4)
    ctx.bezierCurveTo(102.7, 1070.8, 102.7, 1059.2, 102.7, 1047.9)
    ctx.bezierCurveTo(102.7, 1039.9, 105.9, 1033.9, 113.1, 1029.9)
    ctx.bezierCurveTo(133.6, 1018.6, 154.1, 1007.4, 174.5, 996.2)
    ctx.bezierCurveTo(183.0, 991.4, 191.4, 991.4, 199.8, 996.2)
    ctx.bezierCurveTo(220.3, 1007.8, 240.7, 1018.6, 261.2, 1029.9)
    ctx.bezierCurveTo(269.2, 1034.3, 272.4, 1040.7, 272.4, 1049.5)
    ctx.bezierCurveTo(272.0, 1072.8, 272.0, 1095.7, 272.4, 1118.9)
    ctx.bezierCurveTo(272.4, 1128.2, 268.4, 1133.8, 260.4, 1138.2)
    ctx.bezierCurveTo(239.1, 1149.4, 218.3, 1161.1, 197.0, 1172.7)
    ctx.bezierCurveTo(190.2, 1176.3, 183.8, 1176.7, 176.9, 1172.7)
    ctx.bezierCurveTo(155.3, 1160.7, 133.6, 1149.0, 111.9, 1137.0)
    ctx.bezierCurveTo(105.1, 1133.4, 101.9, 1128.2, 101.9, 1120.6)
    ctx.bezierCurveTo(103.1, 1108.1, 102.7, 1095.3, 102.7, 1082.4)
    ctx.lineTo(102.7, 1082.4)
    
    

    // layer1/Path
    
    ctx.moveTo(1196.9, 527.9)
    ctx.bezierCurveTo(1201.7, 530.3, 1206.9, 532.3, 1211.7, 535.2)
    ctx.bezierCurveTo(1229.4, 544.8, 1247.0, 554.8, 1265.1, 564.0)
    ctx.bezierCurveTo(1275.9, 569.7, 1281.1, 576.5, 1280.7, 588.5)
    ctx.bezierCurveTo(1279.9, 609.8, 1280.3, 631.1, 1280.7, 652.3)
    ctx.bezierCurveTo(1280.7, 662.7, 1276.7, 669.6, 1267.1, 674.4)
    ctx.bezierCurveTo(1247.4, 684.8, 1228.2, 695.2, 1208.9, 706.5)
    ctx.bezierCurveTo(1199.7, 711.7, 1191.3, 711.7, 1182.0, 706.1)
    ctx.bezierCurveTo(1162.8, 695.2, 1143.5, 684.4, 1123.8, 674.0)
    ctx.bezierCurveTo(1115.0, 669.6, 1110.6, 663.1, 1111.0, 653.5)
    ctx.bezierCurveTo(1111.4, 631.1, 1111.0, 608.6, 1111.0, 586.1)
    ctx.bezierCurveTo(1111.0, 577.3, 1113.8, 570.9, 1122.2, 566.5)
    ctx.bezierCurveTo(1144.7, 554.4, 1166.8, 542.4, 1188.8, 530.3)
    ctx.bezierCurveTo(1191.3, 529.5, 1193.7, 529.1, 1196.9, 527.9)
    
    

    // layer1/Path
    
    ctx.moveTo(922.4, 249.9)
    ctx.bezierCurveTo(916.8, 247.5, 913.2, 246.3, 910.0, 244.3)
    ctx.bezierCurveTo(889.5, 233.0, 869.1, 221.4, 848.2, 210.6)
    ctx.bezierCurveTo(840.2, 206.1, 835.8, 200.5, 835.8, 191.7)
    ctx.bezierCurveTo(836.2, 168.0, 835.8, 144.4, 835.8, 120.7)
    ctx.bezierCurveTo(835.8, 112.7, 839.0, 106.6, 846.6, 102.6)
    ctx.bezierCurveTo(867.9, 91.0, 888.7, 79.4, 910.0, 68.1)
    ctx.bezierCurveTo(917.2, 64.1, 924.4, 64.1, 931.7, 68.1)
    ctx.bezierCurveTo(953.3, 80.2, 975.0, 91.8, 996.7, 103.4)
    ctx.bezierCurveTo(1002.7, 106.6, 1005.9, 111.9, 1005.9, 118.3)
    ctx.bezierCurveTo(1005.9, 144.0, 1005.9, 169.2, 1005.9, 194.9)
    ctx.bezierCurveTo(1005.9, 200.9, 1003.1, 205.3, 997.5, 208.6)
    ctx.bezierCurveTo(973.0, 221.8, 948.1, 235.8, 922.4, 249.9)
    
    

    // layer1/Path
    
    ctx.moveTo(639.2, 511.1)
    ctx.bezierCurveTo(635.1, 514.3, 633.5, 516.3, 631.5, 517.5)
    ctx.bezierCurveTo(609.5, 529.5, 587.0, 541.6, 564.9, 554.0)
    ctx.bezierCurveTo(557.3, 558.4, 550.9, 557.6, 543.3, 553.6)
    ctx.bezierCurveTo(522.8, 542.0, 502.3, 531.1, 481.5, 520.3)
    ctx.bezierCurveTo(473.5, 515.9, 469.4, 510.3, 469.8, 501.5)
    ctx.bezierCurveTo(470.2, 477.8, 470.2, 454.1, 469.8, 430.4)
    ctx.bezierCurveTo(469.8, 422.0, 473.1, 416.8, 480.3, 412.4)
    ctx.bezierCurveTo(500.7, 401.1, 521.2, 389.9, 541.7, 378.3)
    ctx.bezierCurveTo(550.1, 373.5, 558.5, 373.1, 566.9, 377.9)
    ctx.bezierCurveTo(587.8, 389.5, 609.1, 401.1, 629.9, 412.8)
    ctx.bezierCurveTo(635.1, 415.6, 639.2, 419.2, 639.2, 425.6)
    ctx.bezierCurveTo(639.2, 453.7, 639.2, 482.2, 639.2, 511.1)
    
    

    // layer1/Path
    
    ctx.moveTo(555.7, 249.9)
    ctx.bezierCurveTo(550.5, 247.5, 547.3, 246.7, 544.5, 245.1)
    ctx.bezierCurveTo(523.2, 233.4, 502.3, 221.8, 481.1, 210.6)
    ctx.bezierCurveTo(472.6, 206.1, 469.4, 200.5, 469.4, 191.3)
    ctx.bezierCurveTo(469.8, 167.6, 469.8, 144.0, 469.4, 119.9)
    ctx.bezierCurveTo(469.4, 112.7, 471.4, 106.6, 478.7, 103.0)
    ctx.bezierCurveTo(500.3, 91.4, 522.0, 79.4, 543.7, 67.3)
    ctx.bezierCurveTo(550.9, 63.3, 558.1, 63.3, 565.3, 67.3)
    ctx.bezierCurveTo(587.0, 79.0, 608.7, 91.0, 630.3, 103.0)
    ctx.bezierCurveTo(636.4, 106.2, 639.2, 111.5, 639.2, 118.3)
    ctx.bezierCurveTo(639.2, 143.2, 639.2, 168.0, 639.2, 193.3)
    ctx.bezierCurveTo(639.2, 200.1, 636.8, 205.3, 630.7, 208.6)
    ctx.bezierCurveTo(605.9, 222.2, 581.0, 235.8, 555.7, 249.9)
    
    

    // layer1/Path
    
    ctx.moveTo(272.8, 464.1)
    ctx.bezierCurveTo(272.8, 476.2, 272.4, 488.6, 272.8, 500.7)
    ctx.bezierCurveTo(273.2, 509.5, 269.2, 515.5, 260.8, 519.9)
    ctx.bezierCurveTo(239.5, 531.1, 218.3, 542.4, 197.4, 554.0)
    ctx.bezierCurveTo(190.6, 557.6, 184.6, 557.6, 177.7, 554.0)
    ctx.bezierCurveTo(156.1, 542.0, 134.4, 530.3, 112.7, 518.7)
    ctx.bezierCurveTo(105.9, 515.1, 102.7, 509.5, 103.1, 502.3)
    ctx.bezierCurveTo(103.1, 477.4, 103.1, 452.5, 103.1, 427.2)
    ctx.bezierCurveTo(103.1, 420.4, 106.3, 415.6, 112.3, 412.4)
    ctx.bezierCurveTo(133.2, 400.7, 154.5, 389.1, 175.3, 377.5)
    ctx.bezierCurveTo(183.8, 372.7, 192.2, 372.7, 200.6, 377.5)
    ctx.bezierCurveTo(221.1, 389.1, 241.5, 400.3, 262.0, 411.6)
    ctx.bezierCurveTo(270.0, 416.0, 273.2, 422.4, 273.2, 431.2)
    ctx.bezierCurveTo(272.4, 442.1, 272.8, 452.9, 272.8, 464.1)
    
    

    // layer1/Path
    
    ctx.moveTo(2021.4, 249.9)
    ctx.bezierCurveTo(2006.6, 241.9, 1993.3, 234.6, 1979.7, 227.4)
    ctx.bezierCurveTo(1968.4, 221.4, 1957.6, 215.4, 1946.4, 209.0)
    ctx.bezierCurveTo(1940.3, 205.7, 1937.1, 200.9, 1937.1, 194.1)
    ctx.bezierCurveTo(1937.1, 168.4, 1937.1, 143.2, 1937.1, 117.5)
    ctx.bezierCurveTo(1937.1, 110.7, 1940.3, 106.2, 1946.4, 102.6)
    ctx.bezierCurveTo(1967.6, 91.0, 1988.5, 79.8, 2009.8, 68.1)
    ctx.bezierCurveTo(2017.8, 63.7, 2025.4, 63.7, 2033.4, 68.1)
    ctx.bezierCurveTo(2054.7, 79.8, 2075.6, 91.4, 2096.8, 102.6)
    ctx.bezierCurveTo(2104.5, 106.6, 2106.9, 112.7, 2106.9, 120.7)
    ctx.bezierCurveTo(2106.5, 144.4, 2106.5, 168.0, 2106.9, 191.7)
    ctx.bezierCurveTo(2106.9, 198.1, 2105.3, 203.7, 2099.2, 207.4)
    ctx.bezierCurveTo(2074.0, 221.8, 2048.7, 236.6, 2021.4, 249.9)
    
    

    // layer1/Path
    
    ctx.moveTo(1937.1, 463.7)
    ctx.bezierCurveTo(1937.1, 452.1, 1937.1, 440.5, 1937.1, 429.2)
    ctx.bezierCurveTo(1937.1, 422.0, 1939.5, 416.4, 1946.4, 412.4)
    ctx.bezierCurveTo(1967.6, 400.7, 1988.5, 389.1, 2009.4, 377.5)
    ctx.bezierCurveTo(2018.2, 372.7, 2026.2, 373.1, 2034.6, 377.9)
    ctx.bezierCurveTo(2055.1, 389.1, 2075.6, 400.7, 2096.0, 411.6)
    ctx.bezierCurveTo(2103.2, 415.6, 2106.9, 421.2, 2106.9, 429.2)
    ctx.bezierCurveTo(2106.5, 452.9, 2106.5, 476.6, 2106.9, 500.2)
    ctx.bezierCurveTo(2106.9, 509.5, 2102.8, 515.1, 2094.8, 519.1)
    ctx.bezierCurveTo(2083.2, 525.5, 2071.6, 531.9, 2059.9, 538.0)
    ctx.bezierCurveTo(2049.9, 543.2, 2039.9, 548.4, 2029.8, 554.0)
    ctx.bezierCurveTo(2024.2, 557.2, 2019.0, 556.8, 2013.4, 554.0)
    ctx.bezierCurveTo(1991.3, 542.0, 1968.8, 529.9, 1946.8, 517.9)
    ctx.bezierCurveTo(1939.9, 514.3, 1937.1, 508.7, 1937.1, 501.1)
    ctx.bezierCurveTo(1937.5, 489.0, 1937.1, 476.6, 1937.1, 463.7)
    ctx.lineTo(1937.1, 463.7)
    
    

    // layer1/Path
    
    ctx.moveTo(915.2, 929.2)
    ctx.bezierCurveTo(915.2, 940.0, 915.2, 951.2, 915.2, 962.1)
    ctx.bezierCurveTo(915.2, 971.7, 910.8, 978.1, 902.4, 982.9)
    ctx.bezierCurveTo(881.9, 994.2, 861.0, 1005.4, 840.6, 1016.6)
    ctx.bezierCurveTo(832.6, 1021.0, 824.9, 1020.6, 816.9, 1016.2)
    ctx.bezierCurveTo(796.4, 1005.0, 776.0, 993.8, 755.1, 982.5)
    ctx.bezierCurveTo(747.1, 978.1, 743.5, 971.7, 743.5, 962.9)
    ctx.bezierCurveTo(743.5, 940.4, 743.5, 917.9, 743.5, 895.1)
    ctx.bezierCurveTo(743.5, 886.2, 747.9, 879.8, 755.5, 875.8)
    ctx.bezierCurveTo(776.8, 864.2, 797.6, 852.9, 818.9, 840.9)
    ctx.bezierCurveTo(825.7, 837.3, 832.2, 836.9, 839.0, 840.5)
    ctx.bezierCurveTo(860.6, 852.5, 882.3, 864.2, 903.6, 876.2)
    ctx.bezierCurveTo(911.2, 880.6, 915.2, 887.0, 915.2, 895.9)
    ctx.bezierCurveTo(914.8, 907.1, 915.2, 917.9, 915.2, 929.2)
    
    

    // layer1/Path
    
    ctx.moveTo(1569.6, 465.3)
    ctx.bezierCurveTo(1569.6, 453.3, 1569.6, 440.9, 1569.6, 428.8)
    ctx.bezierCurveTo(1569.6, 421.6, 1572.8, 416.0, 1579.2, 412.4)
    ctx.bezierCurveTo(1600.1, 400.7, 1621.4, 389.1, 1642.2, 377.5)
    ctx.bezierCurveTo(1650.7, 372.7, 1659.1, 372.7, 1667.5, 377.9)
    ctx.bezierCurveTo(1688.0, 389.5, 1708.4, 400.7, 1728.9, 412.0)
    ctx.bezierCurveTo(1736.5, 416.0, 1739.7, 422.0, 1739.7, 430.0)
    ctx.bezierCurveTo(1739.7, 453.7, 1739.7, 477.4, 1739.7, 501.1)
    ctx.bezierCurveTo(1739.7, 509.9, 1736.1, 515.9, 1727.7, 520.3)
    ctx.bezierCurveTo(1706.8, 531.1, 1686.4, 542.4, 1665.9, 553.6)
    ctx.bezierCurveTo(1657.9, 558.0, 1650.7, 557.6, 1642.6, 553.2)
    ctx.bezierCurveTo(1622.2, 542.0, 1601.7, 530.7, 1580.8, 519.5)
    ctx.bezierCurveTo(1572.8, 515.1, 1568.8, 509.1, 1569.2, 500.2)
    ctx.bezierCurveTo(1570.0, 488.6, 1569.6, 477.0, 1569.6, 465.3)
    ctx.lineTo(1569.6, 465.3)
    
    

    // layer1/Path
    
    ctx.moveTo(105.1, 726.1)
    ctx.bezierCurveTo(109.1, 723.7, 113.9, 720.5, 118.8, 717.7)
    ctx.bezierCurveTo(136.0, 708.1, 153.3, 699.3, 170.1, 689.2)
    ctx.bezierCurveTo(181.8, 682.4, 192.2, 682.0, 204.2, 688.8)
    ctx.bezierCurveTo(222.3, 699.3, 240.7, 709.3, 259.2, 718.9)
    ctx.bezierCurveTo(268.4, 723.7, 273.2, 730.2, 272.8, 740.6)
    ctx.bezierCurveTo(272.4, 763.1, 272.4, 785.5, 272.8, 808.0)
    ctx.bezierCurveTo(272.8, 816.8, 270.0, 823.2, 262.0, 827.7)
    ctx.bezierCurveTo(240.3, 839.3, 218.7, 851.3, 197.0, 863.4)
    ctx.bezierCurveTo(191.0, 867.0, 185.0, 867.4, 178.9, 863.8)
    ctx.bezierCurveTo(155.3, 850.5, 131.6, 837.3, 107.5, 824.0)
    ctx.bezierCurveTo(106.3, 823.6, 105.5, 822.4, 104.7, 821.2)
    ctx.bezierCurveTo(102.3, 806.8, 101.9, 743.0, 105.1, 726.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1006.3, 1083.2)
    ctx.bezierCurveTo(1006.3, 1095.3, 1006.3, 1107.7, 1006.3, 1119.7)
    ctx.bezierCurveTo(1006.3, 1127.8, 1002.7, 1133.8, 995.5, 1137.8)
    ctx.bezierCurveTo(974.2, 1149.0, 953.3, 1160.7, 932.1, 1172.3)
    ctx.bezierCurveTo(924.4, 1176.3, 917.6, 1176.3, 910.4, 1172.3)
    ctx.bezierCurveTo(889.5, 1160.7, 868.3, 1149.0, 847.0, 1137.8)
    ctx.bezierCurveTo(839.8, 1133.8, 835.8, 1128.2, 836.2, 1120.2)
    ctx.bezierCurveTo(836.2, 1095.7, 836.2, 1071.6, 836.2, 1047.1)
    ctx.bezierCurveTo(836.2, 1039.9, 839.4, 1034.3, 846.2, 1030.7)
    ctx.bezierCurveTo(867.5, 1019.0, 888.3, 1007.8, 909.6, 996.2)
    ctx.bezierCurveTo(917.6, 991.8, 925.2, 991.8, 933.3, 996.2)
    ctx.bezierCurveTo(954.1, 1007.8, 975.4, 1019.4, 996.3, 1030.7)
    ctx.bezierCurveTo(1003.1, 1034.3, 1006.3, 1039.9, 1006.3, 1047.1)
    ctx.bezierCurveTo(1006.3, 1058.8, 1006.3, 1071.2, 1006.3, 1083.2)
    
    

    // layer1/Path
    
    ctx.moveTo(836.2, 464.9)
    ctx.bezierCurveTo(836.2, 453.3, 836.6, 441.7, 836.2, 430.4)
    ctx.bezierCurveTo(835.8, 421.6, 839.8, 415.6, 847.8, 411.2)
    ctx.bezierCurveTo(867.9, 400.3, 887.5, 389.5, 907.6, 378.3)
    ctx.bezierCurveTo(916.8, 373.1, 925.2, 373.1, 934.5, 378.3)
    ctx.bezierCurveTo(954.9, 389.9, 975.4, 401.1, 995.9, 412.4)
    ctx.bezierCurveTo(1002.7, 416.0, 1005.9, 421.2, 1005.9, 428.8)
    ctx.bezierCurveTo(1005.9, 453.7, 1005.9, 478.6, 1005.9, 503.5)
    ctx.bezierCurveTo(1005.9, 510.3, 1003.1, 515.1, 996.7, 518.3)
    ctx.bezierCurveTo(973.8, 530.7, 950.9, 542.8, 928.4, 555.2)
    ctx.bezierCurveTo(923.6, 558.0, 918.8, 557.6, 914.0, 555.2)
    ctx.bezierCurveTo(911.6, 554.0, 909.2, 553.2, 907.2, 552.0)
    ctx.bezierCurveTo(887.5, 541.6, 868.3, 530.7, 848.6, 520.3)
    ctx.bezierCurveTo(839.8, 515.9, 835.8, 509.5, 835.8, 499.8)
    ctx.bezierCurveTo(836.6, 488.2, 836.2, 476.6, 836.2, 464.9)
    ctx.lineTo(836.2, 464.9)
    
    

    // layer1/Path
    
    ctx.moveTo(365.5, 930.8)
    ctx.bezierCurveTo(365.5, 941.6, 365.1, 952.8, 365.5, 963.7)
    ctx.bezierCurveTo(365.9, 971.7, 361.9, 977.7, 354.7, 981.7)
    ctx.bezierCurveTo(333.0, 993.4, 311.4, 1005.4, 289.7, 1017.0)
    ctx.bezierCurveTo(282.9, 1020.6, 276.0, 1020.2, 269.6, 1016.6)
    ctx.bezierCurveTo(248.0, 1005.0, 226.3, 993.0, 204.6, 981.3)
    ctx.bezierCurveTo(199.0, 978.5, 196.2, 974.1, 195.4, 968.1)
    ctx.bezierCurveTo(195.0, 964.9, 194.6, 962.1, 194.6, 958.9)
    ctx.bezierCurveTo(194.6, 938.8, 195.0, 918.7, 194.6, 898.7)
    ctx.bezierCurveTo(194.2, 887.0, 199.0, 879.4, 209.8, 873.8)
    ctx.bezierCurveTo(229.5, 863.8, 249.2, 852.9, 268.0, 842.1)
    ctx.bezierCurveTo(276.0, 837.7, 283.3, 836.9, 291.3, 841.7)
    ctx.bezierCurveTo(311.8, 853.3, 332.2, 864.6, 352.7, 875.4)
    ctx.bezierCurveTo(361.9, 880.6, 366.3, 887.4, 365.5, 897.9)
    ctx.bezierCurveTo(364.7, 908.7, 365.5, 919.9, 365.5, 930.8)
    ctx.lineTo(365.5, 930.8)
    
    

    // layer1/Path
    
    ctx.moveTo(1939.5, 726.1)
    ctx.bezierCurveTo(1944.4, 722.9, 1950.4, 719.3, 1956.4, 716.1)
    ctx.bezierCurveTo(1972.0, 707.7, 1987.7, 699.7, 2002.9, 690.4)
    ctx.bezierCurveTo(2015.8, 682.8, 2027.0, 682.0, 2040.3, 690.0)
    ctx.bezierCurveTo(2057.1, 700.5, 2074.4, 709.7, 2091.6, 718.5)
    ctx.bezierCurveTo(2102.4, 724.1, 2107.7, 731.0, 2107.3, 743.0)
    ctx.bezierCurveTo(2106.5, 765.5, 2106.9, 787.9, 2107.3, 810.4)
    ctx.bezierCurveTo(2107.3, 818.8, 2104.1, 824.0, 2096.8, 828.1)
    ctx.bezierCurveTo(2075.2, 839.7, 2053.5, 851.7, 2031.8, 863.8)
    ctx.bezierCurveTo(2025.0, 867.8, 2019.0, 867.4, 2012.2, 863.8)
    ctx.bezierCurveTo(1990.5, 851.7, 1968.8, 840.1, 1947.2, 828.1)
    ctx.bezierCurveTo(1941.2, 824.8, 1937.5, 820.4, 1937.5, 813.6)
    ctx.bezierCurveTo(1937.9, 786.3, 1937.9, 759.0, 1938.3, 731.4)
    ctx.bezierCurveTo(1937.9, 729.8, 1938.7, 728.5, 1939.5, 726.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1569.6, 774.3)
    ctx.bezierCurveTo(1569.6, 762.3, 1569.6, 749.8, 1569.6, 737.8)
    ctx.bezierCurveTo(1569.6, 730.6, 1572.8, 724.9, 1579.6, 721.3)
    ctx.bezierCurveTo(1600.9, 709.7, 1621.8, 698.1, 1643.0, 686.8)
    ctx.bezierCurveTo(1651.1, 682.4, 1658.7, 682.4, 1666.7, 686.8)
    ctx.bezierCurveTo(1688.0, 698.5, 1708.8, 710.1, 1730.1, 721.3)
    ctx.bezierCurveTo(1736.9, 724.9, 1740.1, 730.6, 1740.1, 737.8)
    ctx.bezierCurveTo(1740.1, 762.3, 1740.1, 786.3, 1740.1, 810.8)
    ctx.bezierCurveTo(1740.1, 818.8, 1736.5, 824.4, 1728.9, 828.5)
    ctx.bezierCurveTo(1707.6, 839.7, 1686.8, 851.3, 1665.9, 863.4)
    ctx.bezierCurveTo(1658.3, 867.8, 1651.9, 867.4, 1644.2, 863.4)
    ctx.bezierCurveTo(1623.4, 851.7, 1602.1, 839.7, 1581.2, 828.5)
    ctx.bezierCurveTo(1572.8, 824.0, 1569.6, 818.0, 1570.0, 809.2)
    ctx.bezierCurveTo(1570.0, 797.2, 1569.6, 785.5, 1569.6, 774.3)
    ctx.lineTo(1569.6, 774.3)
    
    

    // layer1/Path
    
    ctx.moveTo(1648.3, 929.2)
    ctx.bezierCurveTo(1648.3, 940.0, 1648.3, 951.2, 1648.3, 962.1)
    ctx.bezierCurveTo(1648.3, 971.3, 1644.2, 978.1, 1635.4, 982.9)
    ctx.bezierCurveTo(1615.4, 993.8, 1595.3, 1004.6, 1575.2, 1015.4)
    ctx.bezierCurveTo(1566.8, 1020.2, 1558.8, 1020.6, 1550.0, 1015.8)
    ctx.bezierCurveTo(1529.9, 1004.6, 1509.8, 993.8, 1489.8, 983.3)
    ctx.bezierCurveTo(1480.5, 978.5, 1475.7, 971.3, 1476.1, 961.3)
    ctx.bezierCurveTo(1476.5, 940.0, 1476.5, 918.7, 1476.1, 897.5)
    ctx.bezierCurveTo(1476.1, 887.8, 1480.1, 881.0, 1488.6, 876.2)
    ctx.bezierCurveTo(1509.8, 864.6, 1530.7, 852.9, 1552.0, 841.3)
    ctx.bezierCurveTo(1558.8, 837.7, 1565.2, 836.9, 1572.0, 840.9)
    ctx.bezierCurveTo(1593.7, 852.9, 1615.4, 865.0, 1636.6, 876.6)
    ctx.bezierCurveTo(1644.6, 881.0, 1648.3, 887.8, 1647.9, 896.3)
    ctx.bezierCurveTo(1648.3, 907.1, 1648.3, 917.9, 1648.3, 929.2)
    
    

    // layer1/Path
    
    ctx.moveTo(836.2, 773.5)
    ctx.bezierCurveTo(836.2, 761.9, 836.2, 750.2, 836.2, 739.0)
    ctx.bezierCurveTo(836.2, 731.0, 839.4, 725.3, 847.0, 721.3)
    ctx.bezierCurveTo(867.5, 710.1, 887.9, 698.9, 908.4, 687.6)
    ctx.bezierCurveTo(916.8, 682.8, 925.2, 682.8, 933.7, 687.6)
    ctx.bezierCurveTo(954.1, 698.9, 974.6, 710.1, 995.1, 721.3)
    ctx.bezierCurveTo(1001.9, 724.9, 1005.5, 729.8, 1005.5, 737.4)
    ctx.bezierCurveTo(1005.5, 763.1, 1005.5, 788.3, 1005.5, 814.0)
    ctx.bezierCurveTo(1005.5, 820.0, 1002.7, 824.4, 997.1, 827.7)
    ctx.bezierCurveTo(974.2, 840.1, 951.7, 852.5, 928.8, 865.0)
    ctx.bezierCurveTo(923.2, 868.2, 918.0, 868.2, 912.4, 865.0)
    ctx.bezierCurveTo(889.5, 852.5, 867.1, 840.1, 844.2, 827.7)
    ctx.bezierCurveTo(838.2, 824.4, 835.4, 819.2, 835.4, 812.4)
    ctx.bezierCurveTo(836.2, 798.8, 836.2, 785.9, 836.2, 773.5)
    
    

    // layer1/Path
    
    ctx.moveTo(1648.3, 311.7)
    ctx.bezierCurveTo(1648.3, 322.5, 1648.3, 333.7, 1648.3, 344.6)
    ctx.bezierCurveTo(1648.3, 353.4, 1644.2, 359.4, 1636.2, 363.8)
    ctx.bezierCurveTo(1615.8, 375.1, 1594.9, 386.3, 1574.4, 397.5)
    ctx.bezierCurveTo(1566.4, 401.9, 1559.2, 402.3, 1550.8, 397.9)
    ctx.bezierCurveTo(1530.3, 386.3, 1509.8, 375.1, 1489.4, 363.8)
    ctx.bezierCurveTo(1480.9, 359.0, 1476.1, 352.6, 1476.1, 343.0)
    ctx.bezierCurveTo(1476.1, 320.9, 1476.1, 299.2, 1476.1, 277.2)
    ctx.bezierCurveTo(1476.1, 267.5, 1480.9, 261.1, 1489.4, 256.7)
    ctx.bezierCurveTo(1509.8, 245.5, 1530.7, 234.6, 1551.2, 223.0)
    ctx.bezierCurveTo(1558.8, 219.0, 1565.2, 218.6, 1572.8, 222.6)
    ctx.bezierCurveTo(1594.1, 234.2, 1615.0, 245.9, 1636.2, 257.1)
    ctx.bezierCurveTo(1644.2, 261.5, 1648.3, 267.9, 1647.9, 276.8)
    ctx.bezierCurveTo(1648.3, 288.4, 1648.3, 300.0, 1648.3, 311.7)
    
    

    // layer1/Path
    
    ctx.moveTo(743.5, 309.3)
    ctx.bezierCurveTo(743.5, 298.8, 743.5, 288.4, 743.5, 278.0)
    ctx.bezierCurveTo(743.1, 267.5, 748.3, 260.7, 757.5, 255.9)
    ctx.bezierCurveTo(777.6, 245.1, 797.6, 234.6, 817.7, 223.0)
    ctx.bezierCurveTo(825.7, 218.2, 833.0, 218.6, 841.0, 223.0)
    ctx.bezierCurveTo(861.4, 234.2, 881.9, 245.5, 902.8, 256.7)
    ctx.bezierCurveTo(911.2, 261.5, 915.6, 267.9, 915.6, 277.6)
    ctx.bezierCurveTo(915.2, 299.6, 915.2, 321.3, 915.6, 343.4)
    ctx.bezierCurveTo(915.6, 352.2, 911.6, 358.6, 904.0, 362.6)
    ctx.bezierCurveTo(882.7, 374.3, 861.8, 385.9, 840.6, 397.5)
    ctx.bezierCurveTo(833.4, 401.5, 826.1, 401.9, 818.9, 397.5)
    ctx.bezierCurveTo(798.0, 385.9, 776.8, 374.3, 755.5, 362.6)
    ctx.bezierCurveTo(747.5, 358.2, 743.9, 351.8, 743.9, 343.0)
    ctx.bezierCurveTo(743.5, 332.5, 743.5, 320.9, 743.5, 309.3)
    
    

    // layer1/Path
    
    ctx.moveTo(1832.8, 929.2)
    ctx.bezierCurveTo(1832.8, 940.0, 1832.8, 951.2, 1832.8, 962.1)
    ctx.bezierCurveTo(1832.8, 971.7, 1828.8, 978.1, 1820.0, 982.9)
    ctx.bezierCurveTo(1799.9, 993.8, 1779.9, 1004.6, 1759.8, 1015.4)
    ctx.bezierCurveTo(1751.4, 1020.2, 1743.3, 1020.6, 1734.5, 1015.8)
    ctx.bezierCurveTo(1714.1, 1004.2, 1693.6, 993.0, 1672.7, 982.1)
    ctx.bezierCurveTo(1664.7, 977.7, 1661.1, 971.3, 1661.1, 962.5)
    ctx.bezierCurveTo(1661.1, 940.0, 1661.1, 917.5, 1661.1, 894.7)
    ctx.bezierCurveTo(1661.1, 886.6, 1664.3, 880.6, 1671.9, 876.6)
    ctx.bezierCurveTo(1694.0, 864.6, 1716.1, 852.1, 1738.5, 839.7)
    ctx.bezierCurveTo(1744.5, 836.5, 1751.0, 836.9, 1757.0, 840.1)
    ctx.bezierCurveTo(1778.3, 851.7, 1799.1, 863.4, 1820.4, 875.0)
    ctx.bezierCurveTo(1828.8, 879.8, 1833.6, 886.2, 1833.2, 895.9)
    ctx.bezierCurveTo(1832.4, 907.1, 1832.8, 918.3, 1832.8, 929.2)
    ctx.lineTo(1832.8, 929.2)
    
    

    // layer1/Path
    
    ctx.moveTo(1832.8, 311.3)
    ctx.bezierCurveTo(1832.8, 322.1, 1832.8, 333.3, 1832.8, 344.2)
    ctx.bezierCurveTo(1832.8, 353.0, 1829.2, 359.4, 1821.2, 363.4)
    ctx.bezierCurveTo(1799.9, 375.1, 1779.1, 386.7, 1757.8, 398.3)
    ctx.bezierCurveTo(1750.2, 402.3, 1743.3, 402.3, 1736.1, 397.9)
    ctx.bezierCurveTo(1715.3, 386.3, 1694.0, 374.7, 1672.7, 363.0)
    ctx.bezierCurveTo(1665.5, 359.0, 1661.5, 353.4, 1661.5, 345.4)
    ctx.bezierCurveTo(1661.5, 322.1, 1661.5, 298.8, 1661.5, 276.0)
    ctx.bezierCurveTo(1661.5, 267.1, 1665.9, 261.1, 1673.9, 257.1)
    ctx.bezierCurveTo(1695.2, 245.9, 1716.5, 234.2, 1737.3, 222.6)
    ctx.bezierCurveTo(1744.1, 218.6, 1750.6, 219.0, 1757.4, 222.6)
    ctx.bezierCurveTo(1778.7, 234.2, 1799.5, 245.9, 1820.8, 257.1)
    ctx.bezierCurveTo(1828.8, 261.5, 1832.8, 267.5, 1832.8, 276.4)
    ctx.bezierCurveTo(1832.8, 288.0, 1832.8, 299.6, 1832.8, 311.3)
    ctx.lineTo(1832.8, 311.3)
    
    

    // layer1/Path
    
    ctx.moveTo(365.5, 311.7)
    ctx.bezierCurveTo(365.5, 322.5, 365.1, 333.7, 365.5, 344.6)
    ctx.bezierCurveTo(365.9, 353.0, 362.3, 358.6, 355.1, 362.6)
    ctx.bezierCurveTo(333.4, 374.7, 311.8, 386.3, 290.1, 398.3)
    ctx.bezierCurveTo(283.3, 401.9, 276.8, 402.3, 270.0, 398.7)
    ctx.bezierCurveTo(248.4, 386.7, 226.7, 374.7, 205.0, 363.0)
    ctx.bezierCurveTo(198.2, 359.4, 195.0, 353.8, 194.6, 346.6)
    ctx.bezierCurveTo(194.6, 344.2, 194.6, 341.8, 194.6, 339.4)
    ctx.bezierCurveTo(194.6, 319.7, 195.0, 300.4, 194.6, 280.8)
    ctx.bezierCurveTo(194.2, 268.3, 199.4, 260.3, 211.0, 254.7)
    ctx.bezierCurveTo(230.3, 245.1, 249.2, 234.6, 267.6, 223.8)
    ctx.bezierCurveTo(276.4, 218.6, 284.1, 219.0, 292.5, 223.8)
    ctx.bezierCurveTo(311.8, 234.6, 331.0, 245.5, 351.1, 255.5)
    ctx.bezierCurveTo(361.9, 261.1, 366.7, 268.7, 365.9, 280.8)
    ctx.bezierCurveTo(364.7, 291.2, 365.5, 301.6, 365.5, 311.7)
    ctx.lineTo(365.5, 311.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1111.0, 308.9)
    ctx.bezierCurveTo(1111.0, 298.0, 1111.0, 286.8, 1111.0, 276.0)
    ctx.bezierCurveTo(1111.0, 267.9, 1113.8, 261.9, 1121.4, 257.9)
    ctx.bezierCurveTo(1143.1, 246.3, 1164.8, 234.2, 1186.4, 222.6)
    ctx.bezierCurveTo(1193.3, 218.6, 1199.7, 219.4, 1206.5, 223.0)
    ctx.bezierCurveTo(1220.5, 230.6, 1234.2, 238.2, 1248.2, 245.9)
    ctx.bezierCurveTo(1255.4, 249.9, 1262.7, 253.9, 1269.9, 257.5)
    ctx.bezierCurveTo(1277.1, 261.5, 1281.1, 267.1, 1281.1, 275.2)
    ctx.bezierCurveTo(1281.1, 298.8, 1281.1, 322.5, 1281.1, 346.2)
    ctx.bezierCurveTo(1281.1, 354.2, 1277.1, 359.8, 1269.9, 363.8)
    ctx.bezierCurveTo(1248.6, 375.1, 1227.8, 386.7, 1206.5, 398.7)
    ctx.bezierCurveTo(1198.9, 402.8, 1192.1, 402.3, 1184.8, 398.3)
    ctx.bezierCurveTo(1164.4, 387.1, 1143.9, 375.5, 1123.4, 364.6)
    ctx.bezierCurveTo(1115.4, 360.2, 1111.4, 354.6, 1111.4, 345.4)
    ctx.bezierCurveTo(1111.4, 332.9, 1111.0, 320.9, 1111.0, 308.9)
    
    

    // layer1/Path
    
    ctx.moveTo(638.0, 728.1)
    ctx.bezierCurveTo(638.4, 730.6, 639.2, 733.4, 639.2, 736.6)
    ctx.bezierCurveTo(639.2, 761.0, 639.2, 785.1, 639.6, 809.6)
    ctx.bezierCurveTo(639.6, 818.4, 636.4, 824.4, 627.9, 828.9)
    ctx.bezierCurveTo(606.7, 840.1, 585.8, 851.7, 564.5, 863.4)
    ctx.bezierCurveTo(557.7, 867.0, 551.7, 867.4, 544.9, 863.4)
    ctx.bezierCurveTo(523.2, 851.3, 501.5, 839.7, 479.9, 827.7)
    ctx.bezierCurveTo(472.2, 823.6, 469.4, 818.0, 469.8, 809.6)
    ctx.bezierCurveTo(470.2, 785.9, 470.2, 762.3, 469.8, 738.6)
    ctx.bezierCurveTo(469.8, 730.2, 472.6, 724.9, 480.3, 720.9)
    ctx.bezierCurveTo(500.7, 709.7, 521.2, 698.5, 541.7, 687.2)
    ctx.bezierCurveTo(549.3, 682.8, 557.3, 682.0, 565.3, 686.4)
    ctx.bezierCurveTo(588.6, 699.3, 611.9, 712.1, 634.7, 725.3)
    ctx.bezierCurveTo(635.9, 725.7, 636.4, 726.9, 638.0, 728.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1111.4, 927.6)
    ctx.bezierCurveTo(1111.4, 915.9, 1111.4, 904.3, 1111.4, 893.1)
    ctx.bezierCurveTo(1111.4, 885.4, 1114.6, 880.6, 1121.4, 876.6)
    ctx.bezierCurveTo(1143.1, 865.0, 1164.8, 852.9, 1186.0, 840.9)
    ctx.bezierCurveTo(1192.9, 837.3, 1199.3, 837.3, 1206.1, 840.9)
    ctx.bezierCurveTo(1227.8, 852.9, 1249.0, 865.0, 1270.7, 876.6)
    ctx.bezierCurveTo(1277.5, 880.2, 1280.7, 885.8, 1280.7, 893.1)
    ctx.bezierCurveTo(1280.7, 917.5, 1280.7, 941.6, 1280.7, 966.1)
    ctx.bezierCurveTo(1280.7, 973.3, 1277.1, 978.5, 1270.3, 982.1)
    ctx.bezierCurveTo(1249.0, 993.4, 1228.2, 1005.0, 1206.9, 1016.6)
    ctx.bezierCurveTo(1199.7, 1020.6, 1192.5, 1020.6, 1185.2, 1016.6)
    ctx.bezierCurveTo(1164.0, 1005.0, 1143.1, 993.4, 1121.8, 982.1)
    ctx.bezierCurveTo(1114.2, 978.1, 1111.4, 972.1, 1111.4, 964.1)
    ctx.bezierCurveTo(1111.0, 952.0, 1111.0, 939.6, 1111.4, 927.6)
    ctx.bezierCurveTo(1111.0, 927.6, 1111.0, 927.6, 1111.4, 927.6)
    
    

    // layer1/Path
    
    ctx.moveTo(94.3, 527.1)
    ctx.bezierCurveTo(99.9, 529.5, 105.1, 531.9, 110.3, 534.4)
    ctx.bezierCurveTo(128.8, 544.4, 146.9, 554.4, 165.7, 564.0)
    ctx.bezierCurveTo(176.1, 569.7, 181.8, 576.5, 181.4, 588.9)
    ctx.bezierCurveTo(180.6, 610.2, 181.0, 631.5, 181.4, 652.7)
    ctx.bezierCurveTo(181.4, 661.5, 177.7, 668.0, 170.1, 672.4)
    ctx.bezierCurveTo(148.9, 684.0, 128.0, 695.2, 106.7, 706.9)
    ctx.bezierCurveTo(98.3, 711.3, 91.1, 710.5, 83.1, 706.1)
    ctx.bezierCurveTo(68.2, 697.7, 53.4, 689.6, 38.1, 681.2)
    ctx.bezierCurveTo(32.5, 678.0, 26.9, 675.2, 21.3, 672.0)
    ctx.bezierCurveTo(14.0, 668.0, 10.0, 661.9, 10.0, 653.9)
    ctx.bezierCurveTo(10.0, 644.7, 10.0, 635.5, 10.0, 626.6)
    ctx.bezierCurveTo(10.0, 612.6, 10.0, 598.6, 10.0, 584.5)
    ctx.bezierCurveTo(10.0, 576.5, 13.2, 570.1, 20.5, 566.1)
    ctx.bezierCurveTo(44.9, 554.0, 69.4, 540.8, 94.3, 527.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1382.2, 527.9)
    ctx.bezierCurveTo(1398.7, 536.8, 1415.9, 546.0, 1433.2, 555.2)
    ctx.bezierCurveTo(1440.4, 559.2, 1447.6, 563.2, 1454.9, 567.3)
    ctx.bezierCurveTo(1461.7, 570.9, 1464.9, 576.5, 1464.9, 583.7)
    ctx.bezierCurveTo(1464.9, 596.9, 1464.9, 610.6, 1464.9, 623.8)
    ctx.bezierCurveTo(1464.9, 634.3, 1464.9, 644.7, 1464.9, 654.7)
    ctx.bezierCurveTo(1464.9, 662.7, 1462.1, 668.8, 1454.5, 672.8)
    ctx.bezierCurveTo(1433.2, 684.4, 1412.3, 695.6, 1391.1, 707.3)
    ctx.bezierCurveTo(1383.8, 711.3, 1376.6, 711.7, 1369.4, 707.3)
    ctx.bezierCurveTo(1348.5, 695.6, 1327.3, 684.0, 1306.0, 672.8)
    ctx.bezierCurveTo(1298.0, 668.4, 1294.4, 661.9, 1294.8, 653.1)
    ctx.bezierCurveTo(1295.2, 630.6, 1294.8, 608.2, 1294.8, 585.7)
    ctx.bezierCurveTo(1294.8, 577.7, 1297.6, 571.3, 1304.8, 567.3)
    ctx.bezierCurveTo(1328.1, 554.8, 1351.3, 542.0, 1375.0, 529.5)
    ctx.bezierCurveTo(1377.0, 528.7, 1379.0, 528.7, 1382.2, 527.9)
    
    

    // layer1/Path
    
    ctx.moveTo(646.8, 527.5)
    ctx.bezierCurveTo(651.6, 529.9, 656.4, 531.5, 660.8, 534.0)
    ctx.bezierCurveTo(679.3, 544.0, 697.3, 554.4, 716.2, 563.6)
    ctx.bezierCurveTo(727.8, 569.7, 732.6, 577.3, 732.2, 590.1)
    ctx.bezierCurveTo(731.4, 610.2, 731.8, 630.2, 732.2, 650.3)
    ctx.bezierCurveTo(732.6, 661.9, 727.8, 669.6, 717.0, 675.2)
    ctx.bezierCurveTo(698.5, 684.8, 680.1, 694.8, 662.0, 705.3)
    ctx.bezierCurveTo(651.6, 711.7, 642.0, 711.3, 631.5, 705.3)
    ctx.bezierCurveTo(613.5, 694.8, 595.0, 684.8, 577.0, 674.8)
    ctx.bezierCurveTo(574.2, 673.2, 571.4, 671.6, 568.9, 670.0)
    ctx.bezierCurveTo(564.5, 666.8, 562.1, 662.7, 562.1, 657.5)
    ctx.bezierCurveTo(562.1, 632.7, 562.1, 607.8, 562.1, 582.5)
    ctx.bezierCurveTo(562.1, 576.5, 564.9, 572.1, 569.7, 568.9)
    ctx.bezierCurveTo(572.2, 567.3, 575.0, 565.7, 577.8, 564.0)
    ctx.bezierCurveTo(596.2, 554.0, 614.3, 544.0, 632.7, 534.4)
    ctx.bezierCurveTo(637.2, 531.9, 642.0, 529.9, 646.8, 527.5)
    
    

    // layer1/Path
    
    ctx.moveTo(461.8, 527.1)
    ctx.bezierCurveTo(467.4, 529.9, 473.1, 531.9, 477.9, 534.8)
    ctx.bezierCurveTo(495.5, 544.4, 513.6, 554.0, 531.2, 563.6)
    ctx.bezierCurveTo(534.0, 565.2, 536.8, 566.9, 539.3, 568.5)
    ctx.bezierCurveTo(544.5, 571.7, 547.3, 576.5, 547.3, 582.1)
    ctx.bezierCurveTo(547.3, 607.0, 547.3, 631.9, 547.3, 657.1)
    ctx.bezierCurveTo(547.3, 664.0, 543.3, 668.8, 537.6, 672.0)
    ctx.bezierCurveTo(528.8, 676.8, 520.0, 681.6, 511.2, 686.4)
    ctx.bezierCurveTo(499.5, 692.8, 487.9, 698.9, 476.3, 705.7)
    ctx.bezierCurveTo(467.0, 711.3, 458.6, 711.3, 449.4, 706.1)
    ctx.bezierCurveTo(430.1, 695.2, 410.9, 684.4, 391.2, 674.0)
    ctx.bezierCurveTo(382.0, 669.2, 377.2, 662.7, 377.6, 652.3)
    ctx.bezierCurveTo(378.4, 629.8, 378.0, 607.4, 377.6, 584.5)
    ctx.bezierCurveTo(377.6, 576.9, 380.0, 571.3, 386.8, 567.7)
    ctx.bezierCurveTo(411.3, 554.0, 436.1, 540.4, 461.8, 527.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1099.0, 620.2)
    ctx.bezierCurveTo(1099.0, 631.1, 1099.0, 642.3, 1099.0, 653.1)
    ctx.bezierCurveTo(1099.0, 661.9, 1095.4, 668.4, 1087.7, 672.8)
    ctx.bezierCurveTo(1066.5, 684.4, 1045.6, 695.6, 1024.3, 707.3)
    ctx.bezierCurveTo(1016.3, 711.7, 1008.7, 710.9, 1000.7, 706.5)
    ctx.bezierCurveTo(985.8, 698.1, 971.0, 690.0, 955.7, 681.6)
    ctx.bezierCurveTo(950.1, 678.4, 944.5, 675.6, 939.3, 672.4)
    ctx.bezierCurveTo(932.1, 668.4, 928.0, 662.3, 928.0, 654.3)
    ctx.bezierCurveTo(928.0, 631.1, 928.0, 608.2, 928.0, 584.9)
    ctx.bezierCurveTo(928.0, 576.9, 931.3, 570.5, 938.5, 566.9)
    ctx.bezierCurveTo(960.5, 554.8, 983.0, 542.8, 1005.1, 530.3)
    ctx.bezierCurveTo(1011.5, 526.7, 1017.5, 527.9, 1023.1, 531.1)
    ctx.bezierCurveTo(1037.2, 538.8, 1050.8, 546.4, 1064.9, 553.6)
    ctx.bezierCurveTo(1070.9, 556.8, 1076.9, 560.4, 1083.3, 563.6)
    ctx.bezierCurveTo(1094.2, 568.9, 1099.8, 576.5, 1099.0, 588.5)
    ctx.bezierCurveTo(1098.6, 599.4, 1099.0, 609.8, 1099.0, 620.2)
    ctx.lineTo(1099.0, 620.2)
    
    

    // layer1/Path
    
    ctx.moveTo(1929.1, 526.7)
    ctx.bezierCurveTo(1948.4, 536.8, 1965.6, 546.0, 1982.9, 555.2)
    ctx.bezierCurveTo(1990.1, 559.2, 1997.3, 563.2, 2004.5, 567.3)
    ctx.bezierCurveTo(2011.0, 570.9, 2014.6, 576.1, 2014.6, 583.7)
    ctx.bezierCurveTo(2014.6, 608.2, 2014.6, 632.3, 2014.6, 656.7)
    ctx.bezierCurveTo(2014.6, 662.7, 2011.8, 667.2, 2007.0, 670.8)
    ctx.bezierCurveTo(2005.3, 672.0, 2003.7, 672.8, 2002.1, 674.0)
    ctx.bezierCurveTo(1982.1, 684.8, 1962.0, 695.6, 1942.4, 706.9)
    ctx.bezierCurveTo(1933.5, 711.7, 1925.9, 711.7, 1917.1, 706.9)
    ctx.bezierCurveTo(1897.4, 695.6, 1877.4, 684.8, 1857.3, 674.0)
    ctx.bezierCurveTo(1848.5, 669.2, 1844.5, 662.7, 1844.5, 653.1)
    ctx.bezierCurveTo(1844.9, 630.6, 1844.5, 608.2, 1844.5, 585.3)
    ctx.bezierCurveTo(1844.5, 578.1, 1846.1, 572.1, 1852.9, 568.1)
    ctx.bezierCurveTo(1878.2, 554.8, 1903.0, 541.2, 1929.1, 526.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1204.1, 1083.2)
    ctx.bezierCurveTo(1204.1, 1071.6, 1204.5, 1060.0, 1204.1, 1048.7)
    ctx.bezierCurveTo(1203.7, 1039.9, 1206.9, 1033.9, 1215.3, 1029.5)
    ctx.bezierCurveTo(1235.4, 1019.0, 1255.4, 1007.8, 1275.1, 996.6)
    ctx.bezierCurveTo(1283.5, 991.8, 1291.6, 991.4, 1300.4, 996.2)
    ctx.bezierCurveTo(1320.8, 1007.8, 1341.3, 1018.6, 1362.2, 1029.9)
    ctx.bezierCurveTo(1369.4, 1033.9, 1373.0, 1039.5, 1372.6, 1047.9)
    ctx.bezierCurveTo(1372.2, 1072.4, 1372.2, 1096.5, 1372.6, 1121.0)
    ctx.bezierCurveTo(1372.6, 1128.6, 1369.4, 1133.8, 1362.6, 1137.4)
    ctx.bezierCurveTo(1340.9, 1149.0, 1319.2, 1161.1, 1297.6, 1173.1)
    ctx.bezierCurveTo(1290.8, 1176.7, 1284.3, 1176.7, 1277.5, 1172.7)
    ctx.bezierCurveTo(1256.7, 1161.1, 1235.4, 1149.4, 1214.1, 1138.2)
    ctx.bezierCurveTo(1206.5, 1134.2, 1203.3, 1128.6, 1203.7, 1120.2)
    ctx.bezierCurveTo(1204.1, 1107.7, 1204.1, 1095.3, 1204.1, 1083.2)
    ctx.lineTo(1204.1, 1083.2)
    
    

    // layer1/Path
    
    ctx.moveTo(1287.5, 249.1)
    ctx.bezierCurveTo(1283.5, 247.5, 1279.5, 245.9, 1275.5, 243.9)
    ctx.bezierCurveTo(1255.4, 233.0, 1235.8, 221.8, 1215.7, 211.0)
    ctx.bezierCurveTo(1207.7, 206.5, 1203.7, 200.9, 1203.7, 192.1)
    ctx.bezierCurveTo(1204.1, 168.4, 1204.1, 144.8, 1203.7, 121.1)
    ctx.bezierCurveTo(1203.7, 112.3, 1206.5, 106.2, 1214.9, 101.8)
    ctx.bezierCurveTo(1235.0, 91.4, 1255.0, 80.2, 1274.7, 69.3)
    ctx.bezierCurveTo(1283.9, 64.1, 1292.8, 64.5, 1301.6, 69.7)
    ctx.bezierCurveTo(1321.7, 81.0, 1341.3, 91.8, 1361.4, 102.6)
    ctx.bezierCurveTo(1368.6, 106.6, 1372.6, 111.9, 1372.2, 120.3)
    ctx.bezierCurveTo(1371.8, 144.8, 1372.2, 168.8, 1372.2, 193.3)
    ctx.bezierCurveTo(1372.2, 200.5, 1370.2, 206.1, 1363.0, 210.2)
    ctx.bezierCurveTo(1340.1, 222.6, 1317.6, 235.0, 1294.8, 247.5)
    ctx.bezierCurveTo(1293.2, 247.5, 1290.4, 247.9, 1287.5, 249.1)
    
    

    // layer1/Path
    
    ctx.moveTo(2014.6, 929.6)
    ctx.bezierCurveTo(2014.6, 941.2, 2014.6, 952.8, 2014.6, 964.1)
    ctx.bezierCurveTo(2014.6, 972.1, 2011.4, 978.1, 2003.7, 981.7)
    ctx.bezierCurveTo(1982.5, 993.0, 1961.6, 1004.6, 1940.3, 1016.2)
    ctx.bezierCurveTo(1933.1, 1020.2, 1925.9, 1020.2, 1918.7, 1016.2)
    ctx.bezierCurveTo(1897.4, 1004.6, 1876.6, 993.0, 1855.3, 981.7)
    ctx.bezierCurveTo(1848.5, 978.1, 1844.9, 972.9, 1844.9, 965.7)
    ctx.bezierCurveTo(1844.9, 940.8, 1844.9, 915.9, 1844.9, 890.6)
    ctx.bezierCurveTo(1844.9, 884.6, 1848.1, 880.2, 1853.3, 877.4)
    ctx.bezierCurveTo(1876.2, 865.0, 1898.6, 852.1, 1921.5, 839.7)
    ctx.bezierCurveTo(1927.5, 836.5, 1933.9, 837.3, 1939.9, 840.5)
    ctx.bezierCurveTo(1952.8, 847.3, 1965.6, 854.5, 1978.1, 861.8)
    ctx.bezierCurveTo(1986.5, 866.2, 1994.5, 871.0, 2002.9, 875.4)
    ctx.bezierCurveTo(2011.0, 879.8, 2015.0, 885.4, 2014.6, 894.7)
    ctx.bezierCurveTo(2014.2, 906.3, 2014.6, 917.9, 2014.6, 929.6)
    ctx.lineTo(2014.6, 929.6)
    
    

    // layer1/Path
    
    ctx.moveTo(731.8, 930.0)
    ctx.bezierCurveTo(731.8, 941.6, 731.8, 953.2, 731.8, 964.5)
    ctx.bezierCurveTo(731.8, 972.5, 728.2, 978.1, 720.6, 982.1)
    ctx.bezierCurveTo(700.1, 993.0, 679.3, 1004.2, 658.8, 1015.8)
    ctx.bezierCurveTo(650.0, 1021.0, 642.0, 1020.2, 633.5, 1015.4)
    ctx.bezierCurveTo(613.5, 1004.2, 593.8, 993.4, 573.8, 982.5)
    ctx.bezierCurveTo(565.7, 978.1, 561.7, 972.5, 561.7, 963.3)
    ctx.bezierCurveTo(562.1, 940.0, 562.1, 917.1, 561.7, 893.9)
    ctx.bezierCurveTo(561.7, 885.4, 565.3, 879.8, 572.6, 876.2)
    ctx.bezierCurveTo(594.2, 864.2, 615.9, 852.5, 637.6, 840.5)
    ctx.bezierCurveTo(644.4, 836.9, 650.8, 837.3, 657.6, 840.9)
    ctx.bezierCurveTo(678.5, 852.5, 699.7, 864.2, 720.6, 875.8)
    ctx.bezierCurveTo(728.6, 880.2, 732.2, 886.2, 732.2, 895.1)
    ctx.bezierCurveTo(731.4, 906.7, 731.8, 918.3, 731.8, 930.0)
    ctx.lineTo(731.8, 930.0)
    
    

    // layer1/Path
    
    ctx.moveTo(1099.0, 928.8)
    ctx.bezierCurveTo(1099.0, 939.6, 1099.0, 950.8, 1099.0, 961.7)
    ctx.bezierCurveTo(1099.0, 971.3, 1095.4, 977.7, 1086.5, 982.5)
    ctx.bezierCurveTo(1066.1, 993.4, 1045.2, 1004.6, 1024.7, 1016.2)
    ctx.bezierCurveTo(1016.7, 1020.6, 1009.1, 1020.2, 1001.1, 1015.8)
    ctx.bezierCurveTo(980.6, 1004.6, 960.1, 993.4, 939.3, 982.1)
    ctx.bezierCurveTo(930.9, 977.7, 927.6, 971.3, 927.6, 962.9)
    ctx.bezierCurveTo(927.6, 940.4, 927.6, 917.9, 927.6, 895.5)
    ctx.bezierCurveTo(927.6, 886.6, 931.7, 880.6, 939.7, 876.2)
    ctx.bezierCurveTo(960.9, 864.6, 981.8, 852.9, 1002.7, 841.3)
    ctx.bezierCurveTo(1010.3, 837.3, 1017.1, 837.7, 1024.3, 841.7)
    ctx.bezierCurveTo(1044.4, 852.9, 1064.1, 863.8, 1084.1, 874.6)
    ctx.bezierCurveTo(1094.2, 879.8, 1099.4, 887.0, 1098.6, 898.3)
    ctx.bezierCurveTo(1098.6, 908.3, 1099.0, 918.7, 1099.0, 928.8)
    
    

    // layer1/Path
    
    ctx.moveTo(181.0, 930.0)
    ctx.bezierCurveTo(181.0, 940.4, 180.6, 950.8, 181.0, 960.9)
    ctx.bezierCurveTo(181.8, 971.3, 176.9, 978.1, 167.7, 982.9)
    ctx.bezierCurveTo(152.5, 991.0, 137.6, 999.0, 122.4, 1007.4)
    ctx.bezierCurveTo(93.5, 1023.1, 97.9, 1023.9, 69.0, 1007.8)
    ctx.bezierCurveTo(54.2, 999.4, 38.9, 991.4, 23.7, 983.7)
    ctx.bezierCurveTo(14.8, 979.3, 9.6, 973.3, 9.6, 963.7)
    ctx.bezierCurveTo(9.6, 940.4, 9.6, 917.5, 9.6, 894.3)
    ctx.bezierCurveTo(9.6, 886.2, 13.2, 880.2, 20.9, 876.2)
    ctx.bezierCurveTo(42.5, 864.6, 64.2, 852.5, 85.9, 840.5)
    ctx.bezierCurveTo(92.7, 836.9, 99.1, 837.3, 105.9, 841.3)
    ctx.bezierCurveTo(119.2, 848.5, 132.4, 856.1, 146.0, 863.4)
    ctx.bezierCurveTo(153.3, 867.4, 160.5, 871.4, 167.7, 875.0)
    ctx.bezierCurveTo(176.9, 879.8, 181.8, 886.6, 181.0, 897.1)
    ctx.bezierCurveTo(180.2, 907.9, 181.0, 919.1, 181.0, 930.0)
    ctx.lineTo(181.0, 930.0)
    
    

    // layer1/Path
    
    ctx.moveTo(181.0, 310.5)
    ctx.bezierCurveTo(181.0, 321.3, 180.6, 332.5, 181.0, 343.4)
    ctx.bezierCurveTo(181.4, 352.2, 177.7, 358.6, 170.1, 363.0)
    ctx.bezierCurveTo(148.5, 375.1, 126.8, 386.7, 105.1, 398.7)
    ctx.bezierCurveTo(98.3, 402.3, 91.9, 402.3, 85.1, 398.3)
    ctx.bezierCurveTo(63.8, 386.7, 42.9, 375.1, 21.7, 363.4)
    ctx.bezierCurveTo(14.4, 359.4, 10.0, 353.8, 10.0, 345.8)
    ctx.bezierCurveTo(10.0, 322.1, 10.0, 298.4, 10.0, 274.4)
    ctx.bezierCurveTo(10.0, 266.3, 14.4, 260.7, 21.7, 256.7)
    ctx.bezierCurveTo(42.9, 245.9, 64.2, 234.6, 85.1, 222.6)
    ctx.bezierCurveTo(92.7, 218.2, 99.5, 219.0, 106.7, 223.0)
    ctx.bezierCurveTo(120.0, 230.2, 133.2, 237.8, 146.9, 245.1)
    ctx.bezierCurveTo(154.1, 249.1, 161.3, 253.1, 168.5, 256.7)
    ctx.bezierCurveTo(177.3, 261.1, 181.8, 267.5, 181.0, 277.6)
    ctx.bezierCurveTo(180.6, 288.8, 181.0, 299.6, 181.0, 310.5)
    
    

    // layer1/Path
    
    ctx.moveTo(377.2, 928.4)
    ctx.bezierCurveTo(377.2, 916.7, 377.6, 905.1, 377.2, 893.9)
    ctx.bezierCurveTo(376.8, 886.2, 380.0, 881.0, 386.8, 877.4)
    ctx.bezierCurveTo(408.9, 865.4, 431.3, 852.9, 453.4, 840.9)
    ctx.bezierCurveTo(459.4, 837.7, 465.8, 837.7, 471.8, 840.9)
    ctx.bezierCurveTo(493.9, 853.3, 516.0, 865.4, 538.5, 877.8)
    ctx.bezierCurveTo(544.5, 881.4, 547.7, 886.2, 547.7, 892.7)
    ctx.bezierCurveTo(547.7, 917.1, 547.7, 941.2, 547.7, 965.7)
    ctx.bezierCurveTo(547.7, 973.7, 543.3, 979.3, 536.0, 982.9)
    ctx.bezierCurveTo(516.0, 993.8, 495.9, 1004.6, 475.9, 1015.4)
    ctx.bezierCurveTo(466.6, 1020.6, 458.2, 1020.6, 449.0, 1015.4)
    ctx.bezierCurveTo(430.1, 1004.6, 411.7, 994.2, 392.4, 984.5)
    ctx.bezierCurveTo(381.2, 978.9, 376.8, 971.3, 377.6, 959.7)
    ctx.bezierCurveTo(378.0, 949.2, 377.2, 938.8, 377.2, 928.4)
    
    

    // layer1/Path
    
    ctx.moveTo(377.2, 310.5)
    ctx.bezierCurveTo(377.2, 299.6, 377.6, 288.4, 377.2, 277.6)
    ctx.bezierCurveTo(376.4, 267.9, 380.8, 261.5, 389.6, 257.1)
    ctx.bezierCurveTo(406.8, 247.9, 424.1, 238.2, 441.4, 229.0)
    ctx.bezierCurveTo(445.4, 227.0, 449.0, 224.6, 453.0, 222.6)
    ctx.bezierCurveTo(459.0, 219.0, 465.0, 219.0, 471.0, 222.2)
    ctx.bezierCurveTo(493.1, 234.2, 515.6, 246.3, 537.6, 258.7)
    ctx.bezierCurveTo(544.5, 262.3, 547.3, 267.9, 547.3, 275.6)
    ctx.bezierCurveTo(547.3, 299.2, 547.3, 322.9, 547.3, 347.0)
    ctx.bezierCurveTo(547.3, 355.4, 542.9, 360.6, 535.6, 364.2)
    ctx.bezierCurveTo(515.2, 375.5, 494.3, 386.7, 474.3, 397.9)
    ctx.bezierCurveTo(466.2, 402.3, 458.6, 402.8, 451.0, 397.9)
    ctx.bezierCurveTo(430.5, 386.7, 410.1, 375.1, 389.6, 364.2)
    ctx.bezierCurveTo(380.8, 359.4, 377.2, 353.0, 377.6, 343.4)
    ctx.bezierCurveTo(377.6, 332.1, 377.2, 321.3, 377.2, 310.5)
    
    

    // layer1/Path
    
    ctx.moveTo(561.7, 310.5)
    ctx.bezierCurveTo(561.7, 299.6, 562.1, 288.4, 561.7, 277.6)
    ctx.bezierCurveTo(561.3, 267.9, 565.3, 261.5, 574.2, 256.7)
    ctx.bezierCurveTo(591.0, 247.9, 607.5, 238.6, 624.3, 229.4)
    ctx.bezierCurveTo(628.7, 227.0, 633.1, 224.6, 637.6, 222.2)
    ctx.bezierCurveTo(643.6, 219.0, 649.6, 218.6, 655.6, 221.8)
    ctx.bezierCurveTo(677.3, 233.8, 698.9, 245.5, 720.6, 257.1)
    ctx.bezierCurveTo(728.6, 261.5, 731.8, 267.9, 731.8, 276.8)
    ctx.bezierCurveTo(731.4, 295.6, 731.8, 314.5, 731.8, 333.3)
    ctx.bezierCurveTo(731.8, 337.8, 731.8, 341.8, 731.8, 346.2)
    ctx.bezierCurveTo(731.8, 353.4, 728.6, 359.0, 721.8, 362.6)
    ctx.bezierCurveTo(700.1, 374.7, 678.5, 386.3, 656.8, 398.3)
    ctx.bezierCurveTo(649.2, 402.8, 642.4, 401.5, 635.1, 397.5)
    ctx.bezierCurveTo(621.5, 389.9, 607.5, 382.3, 593.4, 374.7)
    ctx.bezierCurveTo(587.4, 371.5, 581.4, 367.8, 575.0, 364.6)
    ctx.bezierCurveTo(565.7, 359.8, 560.5, 353.4, 561.3, 343.0)
    ctx.bezierCurveTo(562.1, 332.1, 561.7, 321.3, 561.7, 310.5)
    
    

    // layer1/Path
    
    ctx.moveTo(1099.0, 310.1)
    ctx.bezierCurveTo(1099.0, 320.9, 1098.6, 332.1, 1099.0, 343.0)
    ctx.bezierCurveTo(1099.4, 352.6, 1095.4, 359.4, 1086.9, 363.8)
    ctx.bezierCurveTo(1065.7, 375.1, 1044.8, 386.7, 1023.5, 398.3)
    ctx.bezierCurveTo(1016.7, 401.9, 1010.3, 402.3, 1003.5, 398.3)
    ctx.bezierCurveTo(981.8, 386.3, 960.1, 374.7, 938.5, 362.6)
    ctx.bezierCurveTo(932.1, 359.0, 928.0, 353.4, 928.0, 346.2)
    ctx.bezierCurveTo(928.0, 322.5, 928.0, 298.8, 928.0, 274.8)
    ctx.bezierCurveTo(928.0, 266.7, 932.1, 260.7, 939.3, 257.1)
    ctx.bezierCurveTo(960.9, 245.5, 982.6, 233.4, 1004.3, 221.8)
    ctx.bezierCurveTo(1010.3, 218.6, 1016.3, 218.6, 1022.3, 221.8)
    ctx.bezierCurveTo(1044.0, 233.4, 1065.7, 245.5, 1087.3, 257.1)
    ctx.bezierCurveTo(1095.4, 261.5, 1099.0, 267.9, 1098.6, 276.8)
    ctx.bezierCurveTo(1099.0, 288.4, 1099.0, 299.2, 1099.0, 310.1)
    ctx.lineTo(1099.0, 310.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1464.9, 311.7)
    ctx.bezierCurveTo(1464.9, 323.3, 1464.9, 334.9, 1464.9, 346.2)
    ctx.bezierCurveTo(1464.9, 354.2, 1461.3, 359.8, 1453.7, 363.8)
    ctx.bezierCurveTo(1432.4, 375.1, 1411.5, 386.7, 1390.3, 398.3)
    ctx.bezierCurveTo(1383.4, 401.9, 1377.0, 402.3, 1370.2, 398.7)
    ctx.bezierCurveTo(1348.5, 386.7, 1326.9, 375.1, 1305.2, 363.0)
    ctx.bezierCurveTo(1298.0, 359.0, 1294.4, 353.4, 1294.4, 345.0)
    ctx.bezierCurveTo(1294.4, 321.7, 1294.8, 298.8, 1294.4, 275.6)
    ctx.bezierCurveTo(1294.4, 267.1, 1298.0, 261.5, 1305.2, 257.5)
    ctx.bezierCurveTo(1326.9, 245.5, 1348.5, 233.8, 1370.2, 222.2)
    ctx.bezierCurveTo(1377.0, 218.6, 1383.4, 219.0, 1390.3, 222.6)
    ctx.bezierCurveTo(1411.1, 234.2, 1432.4, 245.5, 1453.7, 257.1)
    ctx.bezierCurveTo(1460.9, 261.1, 1464.9, 266.7, 1464.5, 274.8)
    ctx.bezierCurveTo(1464.5, 287.2, 1464.9, 299.2, 1464.9, 311.7)
    ctx.lineTo(1464.9, 311.7)
    
    

    // layer1/Path
    
    ctx.moveTo(1372.6, 465.3)
    ctx.bezierCurveTo(1372.6, 477.4, 1372.6, 489.8, 1372.6, 501.9)
    ctx.bezierCurveTo(1372.6, 509.1, 1370.2, 514.7, 1363.4, 518.7)
    ctx.bezierCurveTo(1340.9, 530.7, 1318.8, 542.4, 1296.4, 554.8)
    ctx.bezierCurveTo(1290.0, 558.4, 1284.3, 557.6, 1278.3, 554.0)
    ctx.bezierCurveTo(1266.3, 547.2, 1253.8, 540.8, 1241.4, 534.4)
    ctx.bezierCurveTo(1231.8, 529.1, 1222.5, 523.9, 1212.9, 518.7)
    ctx.bezierCurveTo(1206.9, 515.5, 1203.7, 510.7, 1203.7, 503.9)
    ctx.bezierCurveTo(1203.7, 478.2, 1203.7, 452.5, 1203.7, 427.2)
    ctx.bezierCurveTo(1203.7, 420.4, 1206.9, 415.6, 1212.9, 412.4)
    ctx.bezierCurveTo(1234.2, 400.7, 1255.0, 389.1, 1275.9, 377.5)
    ctx.bezierCurveTo(1283.9, 373.1, 1291.6, 373.1, 1299.6, 377.5)
    ctx.bezierCurveTo(1320.4, 389.1, 1341.7, 400.7, 1363.0, 412.4)
    ctx.bezierCurveTo(1369.8, 416.0, 1372.6, 421.6, 1372.6, 429.2)
    ctx.bezierCurveTo(1372.2, 440.9, 1372.6, 452.9, 1372.6, 465.3)
    ctx.lineTo(1372.6, 465.3)
    
    

    // layer1/Path
    
    ctx.moveTo(2014.6, 310.9)
    ctx.bezierCurveTo(2014.6, 321.7, 2014.2, 332.9, 2014.6, 343.8)
    ctx.bezierCurveTo(2015.0, 353.4, 2011.0, 359.8, 2002.1, 364.6)
    ctx.bezierCurveTo(1986.5, 373.1, 1970.8, 381.5, 1955.6, 389.9)
    ctx.bezierCurveTo(1951.6, 391.9, 1947.6, 393.9, 1944.0, 396.3)
    ctx.bezierCurveTo(1933.5, 403.6, 1924.3, 401.9, 1913.9, 395.5)
    ctx.bezierCurveTo(1898.6, 386.3, 1883.0, 378.3, 1867.3, 369.8)
    ctx.bezierCurveTo(1862.9, 367.4, 1858.5, 365.0, 1854.1, 362.6)
    ctx.bezierCurveTo(1848.1, 359.4, 1844.9, 354.6, 1844.9, 347.8)
    ctx.bezierCurveTo(1844.9, 322.9, 1844.9, 298.0, 1844.9, 272.8)
    ctx.bezierCurveTo(1844.9, 266.7, 1847.7, 262.3, 1853.3, 259.1)
    ctx.bezierCurveTo(1858.9, 255.9, 1864.5, 253.1, 1869.7, 249.9)
    ctx.bezierCurveTo(1885.8, 241.1, 1902.2, 232.6, 1917.9, 223.4)
    ctx.bezierCurveTo(1925.9, 218.6, 1933.1, 218.6, 1941.2, 223.0)
    ctx.bezierCurveTo(1961.6, 234.6, 1982.1, 245.9, 2002.9, 256.7)
    ctx.bezierCurveTo(2011.0, 261.1, 2015.4, 266.7, 2015.0, 276.0)
    ctx.bezierCurveTo(2014.2, 287.6, 2014.6, 299.2, 2014.6, 310.9)
    ctx.lineTo(2014.6, 310.9)
    
    

    // layer1/Path
    
    ctx.moveTo(1204.1, 775.1)
    ctx.bezierCurveTo(1204.1, 762.3, 1204.1, 749.4, 1204.1, 736.6)
    ctx.bezierCurveTo(1204.1, 729.0, 1207.3, 724.1, 1214.1, 720.5)
    ctx.bezierCurveTo(1234.2, 709.7, 1254.2, 698.9, 1273.9, 687.6)
    ctx.bezierCurveTo(1283.9, 682.0, 1293.2, 682.4, 1302.8, 688.0)
    ctx.bezierCurveTo(1322.1, 698.9, 1341.3, 709.7, 1361.0, 720.1)
    ctx.bezierCurveTo(1369.4, 724.5, 1372.6, 730.6, 1372.2, 739.4)
    ctx.bezierCurveTo(1371.8, 763.1, 1371.8, 787.1, 1372.2, 810.8)
    ctx.bezierCurveTo(1372.2, 819.2, 1369.0, 824.4, 1361.4, 828.5)
    ctx.bezierCurveTo(1340.1, 839.7, 1319.2, 851.3, 1298.0, 863.4)
    ctx.bezierCurveTo(1290.4, 867.8, 1283.9, 867.4, 1276.3, 863.0)
    ctx.bezierCurveTo(1255.4, 850.9, 1234.2, 839.7, 1212.9, 828.1)
    ctx.bezierCurveTo(1206.1, 824.4, 1202.9, 819.2, 1202.9, 811.6)
    ctx.bezierCurveTo(1204.1, 799.6, 1204.1, 787.1, 1204.1, 775.1)
    ctx.lineTo(1204.1, 775.1)
    
    

    // layer1/Path
    
    ctx.moveTo(1464.9, 930.0)
    ctx.bezierCurveTo(1464.9, 940.8, 1464.9, 952.0, 1464.9, 962.9)
    ctx.bezierCurveTo(1464.9, 972.5, 1461.3, 978.9, 1452.5, 983.3)
    ctx.bezierCurveTo(1432.4, 993.8, 1412.3, 1005.0, 1392.3, 1015.8)
    ctx.bezierCurveTo(1384.2, 1020.2, 1376.6, 1020.6, 1368.6, 1016.2)
    ctx.bezierCurveTo(1347.3, 1004.6, 1326.5, 993.4, 1305.2, 981.7)
    ctx.bezierCurveTo(1298.0, 977.7, 1294.8, 971.7, 1294.8, 963.7)
    ctx.bezierCurveTo(1294.8, 940.4, 1294.8, 917.5, 1294.8, 894.3)
    ctx.bezierCurveTo(1294.8, 885.8, 1298.4, 880.2, 1305.6, 876.2)
    ctx.bezierCurveTo(1327.3, 864.2, 1348.9, 852.5, 1370.2, 840.5)
    ctx.bezierCurveTo(1377.0, 836.9, 1383.4, 836.9, 1390.3, 840.9)
    ctx.bezierCurveTo(1411.1, 852.5, 1432.4, 864.2, 1453.3, 875.4)
    ctx.bezierCurveTo(1461.3, 879.8, 1464.5, 886.2, 1464.5, 895.1)
    ctx.bezierCurveTo(1464.5, 906.7, 1464.9, 918.3, 1464.9, 930.0)
    ctx.lineTo(1464.9, 930.0)
    
    

    // layer1/Path
    
    ctx.moveTo(1839.2, 991.4)
    ctx.bezierCurveTo(1859.7, 1002.6, 1879.8, 1013.0, 1899.4, 1023.9)
    ctx.bezierCurveTo(1921.5, 1035.9, 1921.1, 1035.9, 1921.5, 1059.6)
    ctx.bezierCurveTo(1921.5, 1079.2, 1921.5, 1098.5, 1921.5, 1117.7)
    ctx.bezierCurveTo(1921.5, 1126.6, 1917.9, 1133.0, 1909.9, 1137.4)
    ctx.bezierCurveTo(1886.6, 1149.8, 1863.3, 1162.7, 1840.0, 1175.5)
    ctx.bezierCurveTo(1835.2, 1173.5, 1830.8, 1172.3, 1827.2, 1170.3)
    ctx.bezierCurveTo(1808.3, 1160.3, 1789.5, 1149.4, 1770.6, 1139.8)
    ctx.bezierCurveTo(1759.8, 1134.2, 1755.0, 1126.6, 1755.4, 1114.9)
    ctx.bezierCurveTo(1755.8, 1094.5, 1755.8, 1073.6, 1755.4, 1052.7)
    ctx.bezierCurveTo(1755.4, 1041.5, 1759.0, 1033.1, 1770.2, 1027.5)
    ctx.bezierCurveTo(1789.5, 1017.8, 1807.9, 1007.0, 1826.8, 996.6)
    ctx.bezierCurveTo(1830.0, 995.0, 1833.6, 993.8, 1839.2, 991.4)
    
    

    // layer1/Path
    
    ctx.moveTo(370.7, 992.2)
    ctx.bezierCurveTo(375.2, 993.8, 379.2, 995.4, 383.2, 997.4)
    ctx.bezierCurveTo(402.8, 1007.8, 422.1, 1019.0, 441.8, 1029.1)
    ctx.bezierCurveTo(450.6, 1033.9, 454.2, 1040.3, 454.2, 1049.9)
    ctx.bezierCurveTo(453.8, 1072.4, 453.8, 1094.9, 454.2, 1117.7)
    ctx.bezierCurveTo(454.2, 1126.6, 451.4, 1133.0, 443.4, 1137.4)
    ctx.bezierCurveTo(420.1, 1149.8, 396.8, 1162.7, 373.1, 1175.5)
    ctx.bezierCurveTo(368.3, 1173.5, 364.3, 1172.3, 360.3, 1170.3)
    ctx.bezierCurveTo(341.4, 1160.3, 322.6, 1149.4, 303.3, 1139.8)
    ctx.bezierCurveTo(293.3, 1134.6, 288.1, 1127.8, 288.5, 1116.5)
    ctx.bezierCurveTo(289.3, 1094.5, 288.9, 1072.8, 288.5, 1050.7)
    ctx.bezierCurveTo(288.1, 1040.7, 291.7, 1033.5, 301.7, 1028.7)
    ctx.bezierCurveTo(321.4, 1018.6, 340.6, 1007.4, 360.3, 997.0)
    ctx.bezierCurveTo(363.1, 995.0, 366.7, 993.8, 370.7, 992.2)
    
    

    // layer1/Path
    
    ctx.moveTo(739.9, 992.6)
    ctx.bezierCurveTo(745.5, 995.4, 752.3, 998.6, 758.7, 1002.2)
    ctx.bezierCurveTo(775.6, 1011.0, 792.0, 1020.6, 808.9, 1029.5)
    ctx.bezierCurveTo(816.9, 1033.9, 820.9, 1039.9, 820.9, 1048.7)
    ctx.bezierCurveTo(820.9, 1072.4, 820.9, 1096.1, 820.9, 1119.7)
    ctx.bezierCurveTo(820.9, 1126.2, 819.3, 1131.8, 812.9, 1135.4)
    ctx.bezierCurveTo(788.4, 1149.8, 763.5, 1163.5, 737.5, 1176.3)
    ctx.bezierCurveTo(721.8, 1167.9, 706.6, 1160.3, 691.7, 1152.2)
    ctx.bezierCurveTo(682.9, 1147.4, 674.1, 1142.2, 665.2, 1137.4)
    ctx.bezierCurveTo(658.0, 1133.4, 654.4, 1127.4, 654.4, 1119.3)
    ctx.bezierCurveTo(654.4, 1095.7, 654.4, 1072.0, 654.4, 1048.3)
    ctx.bezierCurveTo(654.4, 1041.1, 657.2, 1035.1, 664.0, 1031.5)
    ctx.bezierCurveTo(687.3, 1019.0, 710.6, 1006.2, 734.3, 993.8)
    ctx.bezierCurveTo(735.5, 993.0, 737.1, 993.0, 739.9, 992.6)
    
    

    // layer1/Path
    
    ctx.moveTo(1554.0, 157.2)
    ctx.bezierCurveTo(1554.0, 168.8, 1554.0, 180.5, 1554.0, 191.7)
    ctx.bezierCurveTo(1554.0, 199.7, 1550.4, 205.3, 1543.1, 209.8)
    ctx.bezierCurveTo(1523.1, 220.6, 1503.0, 231.4, 1483.3, 242.7)
    ctx.bezierCurveTo(1475.3, 247.1, 1468.1, 247.1, 1460.1, 242.7)
    ctx.bezierCurveTo(1440.0, 231.4, 1420.4, 220.6, 1400.3, 209.8)
    ctx.bezierCurveTo(1392.3, 205.3, 1388.7, 198.9, 1388.7, 190.5)
    ctx.bezierCurveTo(1388.7, 167.2, 1388.7, 144.4, 1388.7, 121.1)
    ctx.bezierCurveTo(1388.7, 112.3, 1392.3, 106.2, 1400.7, 101.8)
    ctx.bezierCurveTo(1420.8, 91.0, 1440.8, 80.2, 1460.9, 69.3)
    ctx.bezierCurveTo(1468.1, 65.3, 1475.3, 64.9, 1482.5, 69.3)
    ctx.bezierCurveTo(1503.0, 80.6, 1523.5, 91.8, 1544.3, 103.0)
    ctx.bezierCurveTo(1551.2, 106.6, 1554.4, 112.3, 1554.4, 119.5)
    ctx.bezierCurveTo(1554.4, 131.9, 1554.0, 144.8, 1554.0, 157.2)
    ctx.lineTo(1554.0, 157.2)
    
    

    // layer1/Path
    
    ctx.moveTo(820.9, 154.8)
    ctx.bezierCurveTo(820.9, 166.8, 820.9, 179.3, 820.9, 191.3)
    ctx.bezierCurveTo(820.9, 199.3, 817.7, 205.3, 810.1, 209.4)
    ctx.bezierCurveTo(789.6, 220.6, 768.8, 231.8, 748.3, 243.1)
    ctx.bezierCurveTo(740.7, 247.1, 733.8, 247.1, 726.6, 242.7)
    ctx.bezierCurveTo(706.2, 231.4, 685.7, 220.2, 664.8, 209.0)
    ctx.bezierCurveTo(657.2, 204.9, 654.4, 198.9, 654.4, 190.9)
    ctx.bezierCurveTo(654.4, 167.6, 654.4, 144.8, 654.4, 121.5)
    ctx.bezierCurveTo(654.4, 112.7, 657.6, 106.2, 666.0, 101.8)
    ctx.bezierCurveTo(686.5, 90.6, 707.4, 79.4, 727.8, 68.5)
    ctx.bezierCurveTo(734.7, 64.9, 741.1, 64.9, 747.9, 68.5)
    ctx.bezierCurveTo(768.4, 79.8, 788.8, 91.0, 809.7, 102.2)
    ctx.bezierCurveTo(817.3, 106.2, 820.9, 112.3, 820.5, 120.3)
    ctx.bezierCurveTo(820.9, 131.5, 820.9, 143.2, 820.9, 154.8)
    ctx.lineTo(820.9, 154.8)
    
    

    // layer1/Path
    
    ctx.moveTo(1921.5, 156.8)
    ctx.bezierCurveTo(1921.5, 168.4, 1921.5, 180.1, 1921.5, 191.3)
    ctx.bezierCurveTo(1921.5, 199.3, 1918.3, 205.3, 1910.7, 209.4)
    ctx.bezierCurveTo(1890.2, 220.6, 1869.3, 231.8, 1848.9, 243.1)
    ctx.bezierCurveTo(1841.2, 247.1, 1834.8, 247.1, 1827.2, 243.1)
    ctx.bezierCurveTo(1806.7, 231.8, 1786.3, 220.6, 1765.4, 209.4)
    ctx.bezierCurveTo(1758.6, 205.7, 1755.4, 200.1, 1755.0, 192.9)
    ctx.bezierCurveTo(1755.0, 168.4, 1755.0, 144.4, 1755.0, 119.9)
    ctx.bezierCurveTo(1755.0, 111.9, 1758.6, 106.2, 1766.2, 102.2)
    ctx.bezierCurveTo(1786.3, 91.4, 1806.3, 80.6, 1826.4, 69.7)
    ctx.bezierCurveTo(1834.4, 65.3, 1841.6, 65.3, 1849.7, 69.7)
    ctx.bezierCurveTo(1868.9, 80.6, 1888.6, 91.0, 1908.2, 101.4)
    ctx.bezierCurveTo(1917.9, 106.6, 1921.5, 113.9, 1921.1, 123.9)
    ctx.bezierCurveTo(1921.5, 134.7, 1921.5, 145.6, 1921.5, 156.8)
    ctx.lineTo(1921.5, 156.8)
    
    

    // layer1/Path
    
    ctx.moveTo(371.9, 556.4)
    ctx.bezierCurveTo(367.5, 554.8, 363.5, 553.6, 360.3, 552.0)
    ctx.bezierCurveTo(340.2, 541.2, 320.2, 530.3, 300.1, 519.5)
    ctx.bezierCurveTo(292.1, 515.1, 288.5, 509.1, 288.5, 500.2)
    ctx.bezierCurveTo(288.9, 476.6, 288.9, 452.9, 288.5, 428.8)
    ctx.bezierCurveTo(288.5, 420.4, 292.1, 415.2, 299.3, 411.2)
    ctx.bezierCurveTo(319.4, 400.3, 339.4, 389.5, 359.1, 378.3)
    ctx.bezierCurveTo(367.1, 373.9, 374.3, 373.9, 382.4, 378.3)
    ctx.bezierCurveTo(402.0, 389.5, 422.1, 400.3, 442.2, 411.2)
    ctx.bezierCurveTo(449.4, 415.2, 453.4, 420.4, 453.4, 428.8)
    ctx.bezierCurveTo(453.0, 453.3, 453.4, 477.8, 453.4, 501.9)
    ctx.bezierCurveTo(453.4, 508.7, 451.0, 513.9, 445.0, 517.1)
    ctx.bezierCurveTo(420.9, 530.7, 396.8, 544.8, 371.9, 556.4)
    
    

    // layer1/Path
    
    ctx.moveTo(1105.4, 1175.5)
    ctx.bezierCurveTo(1102.2, 1174.3, 1099.8, 1173.5, 1097.4, 1172.3)
    ctx.bezierCurveTo(1076.1, 1161.1, 1055.2, 1149.0, 1034.0, 1138.2)
    ctx.bezierCurveTo(1025.9, 1133.8, 1021.9, 1127.8, 1021.9, 1118.9)
    ctx.bezierCurveTo(1021.9, 1095.3, 1021.9, 1071.6, 1021.9, 1047.5)
    ctx.bezierCurveTo(1021.9, 1041.5, 1023.1, 1035.1, 1029.6, 1031.5)
    ctx.bezierCurveTo(1054.0, 1017.8, 1078.1, 1004.6, 1102.2, 991.4)
    ctx.bezierCurveTo(1107.4, 993.4, 1111.8, 994.6, 1115.8, 996.6)
    ctx.bezierCurveTo(1135.5, 1007.0, 1154.7, 1017.8, 1174.0, 1028.3)
    ctx.bezierCurveTo(1182.8, 1033.1, 1186.8, 1039.5, 1186.8, 1048.7)
    ctx.bezierCurveTo(1186.4, 1072.0, 1186.4, 1094.9, 1186.8, 1118.1)
    ctx.bezierCurveTo(1186.8, 1126.2, 1184.0, 1132.2, 1176.4, 1136.2)
    ctx.bezierCurveTo(1153.1, 1149.8, 1129.9, 1163.9, 1105.4, 1175.5)
    
    

    // layer1/Path
    
    ctx.moveTo(739.1, 556.8)
    ctx.bezierCurveTo(733.4, 554.4, 729.8, 553.6, 726.6, 551.6)
    ctx.bezierCurveTo(707.0, 541.2, 687.7, 530.3, 668.0, 519.9)
    ctx.bezierCurveTo(659.2, 515.5, 654.4, 509.1, 654.8, 499.4)
    ctx.bezierCurveTo(655.2, 476.2, 655.2, 453.3, 654.8, 430.0)
    ctx.bezierCurveTo(654.8, 421.2, 658.8, 415.2, 666.8, 410.8)
    ctx.bezierCurveTo(686.9, 399.9, 707.0, 389.1, 726.6, 377.9)
    ctx.bezierCurveTo(733.8, 373.9, 740.7, 373.5, 748.3, 377.5)
    ctx.bezierCurveTo(769.2, 389.1, 790.4, 400.7, 811.7, 412.4)
    ctx.bezierCurveTo(817.7, 415.6, 820.9, 420.8, 820.9, 427.6)
    ctx.bezierCurveTo(820.9, 452.5, 820.9, 477.4, 820.9, 502.7)
    ctx.bezierCurveTo(820.9, 509.5, 817.7, 514.3, 811.7, 517.9)
    ctx.bezierCurveTo(802.5, 523.1, 792.8, 528.3, 783.2, 533.6)
    ctx.bezierCurveTo(768.8, 541.2, 753.9, 548.8, 739.1, 556.8)
    
    

    // layer1/Path
    
    ctx.moveTo(453.8, 156.4)
    ctx.bezierCurveTo(453.8, 168.4, 453.8, 180.9, 453.8, 192.9)
    ctx.bezierCurveTo(453.8, 199.7, 451.0, 204.9, 445.0, 208.2)
    ctx.bezierCurveTo(423.3, 220.2, 401.6, 231.8, 380.0, 243.9)
    ctx.bezierCurveTo(373.9, 247.1, 367.9, 247.1, 361.9, 243.9)
    ctx.bezierCurveTo(340.2, 231.8, 318.6, 220.2, 296.9, 208.2)
    ctx.bezierCurveTo(291.7, 205.3, 288.5, 200.9, 288.5, 194.5)
    ctx.bezierCurveTo(288.5, 168.8, 288.5, 143.6, 288.5, 117.9)
    ctx.bezierCurveTo(288.5, 111.1, 291.3, 106.2, 297.3, 102.6)
    ctx.bezierCurveTo(318.6, 91.0, 339.8, 79.8, 360.7, 68.1)
    ctx.bezierCurveTo(367.5, 64.5, 373.9, 64.5, 380.8, 68.1)
    ctx.bezierCurveTo(401.2, 79.4, 422.1, 90.6, 442.6, 101.4)
    ctx.bezierCurveTo(449.8, 105.4, 453.8, 111.1, 453.4, 119.1)
    ctx.bezierCurveTo(453.4, 132.3, 453.8, 144.4, 453.8, 156.4)
    
    

    // layer1/Path
    
    ctx.moveTo(1470.9, 1176.3)
    ctx.bezierCurveTo(1446.8, 1163.1, 1424.0, 1150.6, 1401.1, 1138.2)
    ctx.bezierCurveTo(1392.7, 1133.4, 1388.3, 1127.0, 1388.7, 1117.3)
    ctx.bezierCurveTo(1389.1, 1094.9, 1389.1, 1072.4, 1388.7, 1049.5)
    ctx.bezierCurveTo(1388.7, 1039.9, 1392.7, 1033.5, 1401.5, 1028.7)
    ctx.bezierCurveTo(1421.2, 1018.2, 1440.4, 1007.4, 1459.7, 996.6)
    ctx.bezierCurveTo(1467.7, 992.2, 1474.9, 991.4, 1482.9, 996.2)
    ctx.bezierCurveTo(1502.6, 1007.4, 1522.7, 1018.2, 1542.7, 1029.1)
    ctx.bezierCurveTo(1550.4, 1033.1, 1554.0, 1038.7, 1554.0, 1046.7)
    ctx.bezierCurveTo(1554.0, 1071.2, 1554.0, 1095.3, 1554.0, 1119.7)
    ctx.bezierCurveTo(1554.0, 1126.2, 1552.0, 1131.8, 1545.5, 1135.4)
    ctx.bezierCurveTo(1521.5, 1149.4, 1497.4, 1163.5, 1470.9, 1176.3)
    
    

    // layer1/Path
    
    ctx.moveTo(1469.7, 556.4)
    ctx.bezierCurveTo(1458.1, 550.4, 1446.8, 544.4, 1435.6, 538.4)
    ctx.bezierCurveTo(1424.0, 531.9, 1412.3, 525.5, 1400.7, 519.5)
    ctx.bezierCurveTo(1392.7, 515.1, 1388.3, 509.5, 1388.3, 500.2)
    ctx.bezierCurveTo(1388.3, 476.6, 1388.3, 452.9, 1388.3, 428.8)
    ctx.bezierCurveTo(1388.3, 420.8, 1392.3, 415.2, 1399.5, 411.2)
    ctx.bezierCurveTo(1419.6, 400.3, 1439.6, 389.5, 1459.3, 378.3)
    ctx.bezierCurveTo(1468.1, 373.1, 1475.7, 373.9, 1484.6, 379.1)
    ctx.bezierCurveTo(1503.8, 389.9, 1523.1, 400.7, 1542.7, 411.2)
    ctx.bezierCurveTo(1551.2, 415.6, 1554.4, 422.0, 1554.0, 430.8)
    ctx.bezierCurveTo(1554.0, 444.9, 1554.0, 458.9, 1554.0, 473.0)
    ctx.bezierCurveTo(1554.0, 482.6, 1554.0, 492.2, 1554.0, 502.3)
    ctx.bezierCurveTo(1554.0, 509.5, 1550.8, 515.1, 1543.9, 518.7)
    ctx.bezierCurveTo(1522.3, 530.3, 1500.6, 542.0, 1478.5, 553.6)
    ctx.bezierCurveTo(1476.5, 554.8, 1474.1, 555.2, 1469.7, 556.4)
    
    

    // layer1/Path
    
    ctx.moveTo(1839.6, 557.2)
    ctx.bezierCurveTo(1833.6, 554.4, 1828.0, 552.4, 1823.2, 550.0)
    ctx.bezierCurveTo(1805.1, 540.4, 1787.9, 530.3, 1769.8, 521.1)
    ctx.bezierCurveTo(1759.4, 515.9, 1755.4, 508.3, 1755.8, 497.4)
    ctx.bezierCurveTo(1756.2, 476.2, 1756.2, 454.9, 1755.8, 433.6)
    ctx.bezierCurveTo(1755.8, 422.8, 1759.4, 415.6, 1770.2, 410.0)
    ctx.bezierCurveTo(1789.1, 400.7, 1807.1, 390.3, 1825.2, 379.9)
    ctx.bezierCurveTo(1834.4, 374.7, 1842.4, 373.9, 1852.1, 379.5)
    ctx.bezierCurveTo(1871.3, 390.7, 1890.6, 401.1, 1910.3, 411.6)
    ctx.bezierCurveTo(1918.3, 416.0, 1922.3, 422.0, 1922.3, 430.8)
    ctx.bezierCurveTo(1922.3, 454.1, 1922.3, 477.0, 1922.3, 500.2)
    ctx.bezierCurveTo(1922.3, 507.9, 1919.9, 514.7, 1912.3, 518.7)
    ctx.bezierCurveTo(1887.4, 531.1, 1863.7, 544.4, 1839.6, 557.2)
    
    

    // layer1/Path
    
    ctx.moveTo(1104.6, 556.8)
    ctx.bezierCurveTo(1097.0, 553.2, 1090.9, 550.4, 1084.5, 547.2)
    ctx.bezierCurveTo(1070.1, 539.6, 1056.0, 530.7, 1041.2, 523.9)
    ctx.bezierCurveTo(1026.3, 517.1, 1021.1, 507.1, 1021.9, 491.8)
    ctx.bezierCurveTo(1023.1, 473.8, 1022.3, 455.3, 1022.3, 437.3)
    ctx.bezierCurveTo(1022.3, 434.8, 1022.3, 432.4, 1022.3, 430.0)
    ctx.bezierCurveTo(1022.3, 421.2, 1025.9, 415.2, 1034.0, 410.8)
    ctx.bezierCurveTo(1052.8, 400.7, 1071.7, 390.3, 1090.5, 379.5)
    ctx.bezierCurveTo(1100.6, 373.9, 1109.0, 373.9, 1119.0, 379.5)
    ctx.bezierCurveTo(1137.5, 390.3, 1156.3, 400.7, 1175.2, 410.8)
    ctx.bezierCurveTo(1183.2, 415.2, 1187.2, 421.2, 1187.2, 430.0)
    ctx.bezierCurveTo(1187.2, 453.7, 1187.2, 477.4, 1187.2, 501.1)
    ctx.bezierCurveTo(1187.2, 508.3, 1184.8, 514.3, 1178.0, 517.9)
    ctx.bezierCurveTo(1153.9, 531.1, 1130.7, 544.8, 1104.6, 556.8)
    
    

    // layer1/Path
    
    ctx.moveTo(1839.2, 866.6)
    ctx.bezierCurveTo(1833.2, 863.8, 1827.6, 861.8, 1822.8, 858.9)
    ctx.bezierCurveTo(1805.1, 849.3, 1787.5, 838.9, 1769.4, 829.7)
    ctx.bezierCurveTo(1759.8, 824.8, 1755.0, 818.4, 1755.4, 808.0)
    ctx.bezierCurveTo(1755.4, 785.5, 1755.4, 763.1, 1755.4, 740.2)
    ctx.bezierCurveTo(1755.4, 731.0, 1759.0, 724.1, 1767.8, 719.3)
    ctx.bezierCurveTo(1787.1, 709.7, 1805.9, 698.9, 1824.4, 688.4)
    ctx.bezierCurveTo(1833.6, 683.2, 1842.0, 682.8, 1851.3, 688.4)
    ctx.bezierCurveTo(1870.5, 699.7, 1890.2, 710.1, 1909.5, 720.5)
    ctx.bezierCurveTo(1917.1, 724.5, 1920.7, 730.2, 1920.7, 738.2)
    ctx.bezierCurveTo(1920.7, 762.7, 1920.7, 786.7, 1920.7, 811.2)
    ctx.bezierCurveTo(1920.7, 817.6, 1917.9, 823.2, 1911.9, 826.4)
    ctx.bezierCurveTo(1888.2, 840.1, 1863.7, 853.3, 1839.2, 866.6)
    
    

    // layer1/Path
    
    ctx.moveTo(1187.2, 155.2)
    ctx.bezierCurveTo(1187.2, 167.2, 1187.2, 179.7, 1187.2, 191.7)
    ctx.bezierCurveTo(1187.2, 199.7, 1184.0, 205.7, 1176.4, 209.8)
    ctx.bezierCurveTo(1156.3, 220.6, 1136.3, 231.4, 1116.6, 242.7)
    ctx.bezierCurveTo(1107.8, 247.9, 1100.2, 246.7, 1091.3, 242.3)
    ctx.bezierCurveTo(1072.1, 231.4, 1052.8, 220.6, 1033.2, 210.2)
    ctx.bezierCurveTo(1025.5, 206.1, 1021.9, 200.1, 1021.9, 192.5)
    ctx.bezierCurveTo(1021.9, 179.3, 1021.9, 165.6, 1021.9, 152.4)
    ctx.bezierCurveTo(1021.9, 141.5, 1021.9, 130.3, 1022.3, 119.5)
    ctx.bezierCurveTo(1022.3, 111.5, 1025.9, 105.8, 1033.6, 101.8)
    ctx.bezierCurveTo(1053.2, 91.4, 1072.5, 81.0, 1091.7, 70.1)
    ctx.bezierCurveTo(1100.2, 65.3, 1108.2, 64.9, 1117.0, 70.1)
    ctx.bezierCurveTo(1136.3, 81.0, 1155.5, 91.4, 1175.2, 101.8)
    ctx.bezierCurveTo(1183.2, 106.2, 1187.2, 112.3, 1187.2, 121.1)
    ctx.bezierCurveTo(1187.2, 132.3, 1187.2, 143.6, 1187.2, 155.2)
    
    

    // layer1/Path
    
    ctx.moveTo(738.7, 866.2)
    ctx.bezierCurveTo(734.3, 864.6, 730.6, 863.0, 727.4, 861.4)
    ctx.bezierCurveTo(707.4, 850.5, 687.7, 839.3, 667.2, 828.5)
    ctx.bezierCurveTo(658.4, 823.6, 654.4, 817.2, 654.4, 808.0)
    ctx.bezierCurveTo(654.8, 785.5, 654.8, 763.1, 654.4, 740.2)
    ctx.bezierCurveTo(654.4, 730.6, 658.4, 724.1, 667.2, 719.7)
    ctx.bezierCurveTo(686.9, 709.3, 706.2, 698.9, 725.8, 688.0)
    ctx.bezierCurveTo(733.8, 683.6, 741.1, 683.2, 749.5, 687.6)
    ctx.bezierCurveTo(769.6, 698.9, 789.6, 709.7, 809.7, 720.1)
    ctx.bezierCurveTo(817.3, 724.1, 820.9, 729.8, 820.9, 737.8)
    ctx.bezierCurveTo(820.9, 762.3, 820.9, 786.3, 820.9, 810.8)
    ctx.bezierCurveTo(820.9, 817.2, 818.5, 822.8, 812.1, 826.0)
    ctx.bezierCurveTo(787.6, 839.7, 763.5, 854.1, 738.7, 866.2)
    
    

    // layer1/Path
    
    ctx.moveTo(1472.1, 866.2)
    ctx.bezierCurveTo(1468.1, 864.6, 1464.1, 863.4, 1460.9, 861.8)
    ctx.bezierCurveTo(1440.8, 850.9, 1421.2, 839.7, 1400.7, 828.9)
    ctx.bezierCurveTo(1391.9, 824.0, 1387.9, 817.6, 1388.3, 808.0)
    ctx.bezierCurveTo(1388.7, 785.5, 1388.7, 763.1, 1388.3, 740.2)
    ctx.bezierCurveTo(1388.3, 730.6, 1392.3, 724.1, 1401.1, 719.7)
    ctx.bezierCurveTo(1420.8, 709.3, 1440.0, 698.9, 1459.3, 688.0)
    ctx.bezierCurveTo(1467.3, 683.6, 1474.9, 683.6, 1482.9, 688.0)
    ctx.bezierCurveTo(1503.0, 699.3, 1523.1, 710.1, 1543.1, 720.5)
    ctx.bezierCurveTo(1550.0, 724.1, 1554.0, 729.0, 1554.0, 736.6)
    ctx.bezierCurveTo(1554.0, 762.3, 1554.0, 787.9, 1554.0, 813.2)
    ctx.bezierCurveTo(1554.0, 818.4, 1552.0, 822.8, 1547.1, 825.6)
    ctx.bezierCurveTo(1522.3, 839.3, 1498.2, 854.1, 1472.1, 866.2)
    
    

    // layer1/Path
    
    ctx.moveTo(371.9, 866.6)
    ctx.bezierCurveTo(367.1, 864.6, 364.3, 863.4, 361.5, 862.2)
    ctx.bezierCurveTo(341.0, 850.9, 320.6, 839.7, 299.7, 828.5)
    ctx.bezierCurveTo(292.5, 824.4, 288.1, 819.2, 288.5, 811.2)
    ctx.bezierCurveTo(288.9, 786.7, 288.5, 762.7, 288.5, 738.2)
    ctx.bezierCurveTo(288.5, 729.8, 292.1, 724.5, 299.7, 720.5)
    ctx.bezierCurveTo(319.4, 710.1, 338.6, 699.7, 357.9, 688.8)
    ctx.bezierCurveTo(366.3, 684.0, 374.3, 683.6, 383.2, 688.4)
    ctx.bezierCurveTo(402.4, 699.3, 421.7, 710.1, 441.4, 720.1)
    ctx.bezierCurveTo(450.2, 724.9, 453.8, 731.4, 453.4, 741.0)
    ctx.bezierCurveTo(453.0, 763.5, 453.0, 785.9, 453.4, 808.8)
    ctx.bezierCurveTo(453.4, 817.6, 450.6, 824.0, 442.6, 828.5)
    ctx.bezierCurveTo(419.3, 840.5, 396.4, 853.3, 371.9, 866.6)
    
    

    // layer1/Path
    
    ctx.moveTo(1103.8, 866.6)
    ctx.bezierCurveTo(1079.3, 852.9, 1055.2, 840.1, 1031.6, 826.9)
    ctx.bezierCurveTo(1025.9, 823.6, 1023.5, 819.2, 1022.7, 813.6)
    ctx.bezierCurveTo(1022.3, 811.2, 1022.3, 808.8, 1022.3, 806.4)
    ctx.bezierCurveTo(1022.3, 785.1, 1022.7, 763.9, 1022.3, 742.6)
    ctx.bezierCurveTo(1021.9, 731.0, 1026.7, 723.3, 1038.0, 718.1)
    ctx.bezierCurveTo(1055.6, 709.3, 1072.5, 699.7, 1089.7, 690.0)
    ctx.bezierCurveTo(1100.2, 684.0, 1109.4, 683.2, 1120.2, 689.6)
    ctx.bezierCurveTo(1137.5, 700.1, 1155.5, 709.7, 1173.6, 718.9)
    ctx.bezierCurveTo(1183.6, 724.1, 1188.8, 731.0, 1188.4, 742.2)
    ctx.bezierCurveTo(1188.0, 764.3, 1188.0, 785.9, 1188.4, 808.0)
    ctx.bezierCurveTo(1188.8, 818.4, 1184.4, 825.2, 1175.2, 830.1)
    ctx.bezierCurveTo(1155.9, 840.1, 1137.5, 850.9, 1118.6, 861.0)
    ctx.bezierCurveTo(1113.8, 862.6, 1109.4, 864.2, 1103.8, 866.6)
    
    

    // layer1/Path
    
    ctx.moveTo(2115.9, 711.8)
    ctx.bezierCurveTo(2109.0, 711.8, 2103.4, 709.4, 2097.8, 706.2)
    ctx.bezierCurveTo(2079.0, 695.8, 2060.5, 685.4, 2041.6, 675.3)
    ctx.bezierCurveTo(2032.0, 670.5, 2028.0, 663.3, 2028.0, 653.3)
    ctx.bezierCurveTo(2028.4, 631.6, 2028.4, 609.5, 2028.0, 587.9)
    ctx.bezierCurveTo(2028.0, 577.8, 2031.6, 570.6, 2041.2, 565.8)
    ctx.bezierCurveTo(2060.1, 555.8, 2079.0, 545.3, 2097.8, 535.3)
    ctx.bezierCurveTo(2103.4, 532.5, 2109.9, 530.9, 2115.5, 528.9)
    ctx.bezierCurveTo(2115.9, 589.9, 2115.9, 650.8, 2115.9, 711.8)
    
    

    // layer1/Path
    
    ctx.moveTo(2115.9, 1019.2)
    ctx.bezierCurveTo(2110.7, 1021.2, 2105.8, 1019.6, 2101.0, 1017.2)
    ctx.bezierCurveTo(2081.0, 1006.3, 2060.9, 995.1, 2040.8, 984.7)
    ctx.bezierCurveTo(2032.0, 979.9, 2028.0, 973.0, 2028.0, 963.8)
    ctx.bezierCurveTo(2028.0, 941.3, 2028.0, 918.9, 2028.0, 896.0)
    ctx.bezierCurveTo(2028.0, 886.4, 2032.0, 880.0, 2040.8, 875.1)
    ctx.bezierCurveTo(2060.5, 864.7, 2079.8, 853.9, 2099.4, 843.0)
    ctx.bezierCurveTo(2104.6, 840.6, 2109.9, 837.8, 2115.9, 839.8)
    ctx.bezierCurveTo(2115.9, 899.6, 2115.9, 959.4, 2115.9, 1019.2)
    
    

    // layer1/Path
    
    ctx.moveTo(2115.9, 400.9)
    ctx.bezierCurveTo(2109.9, 402.9, 2104.6, 400.5, 2099.4, 397.7)
    ctx.bezierCurveTo(2079.4, 386.8, 2059.7, 376.0, 2039.6, 365.2)
    ctx.bezierCurveTo(2032.0, 361.2, 2028.4, 355.5, 2028.0, 347.5)
    ctx.bezierCurveTo(2028.0, 323.4, 2028.0, 299.0, 2028.0, 274.9)
    ctx.bezierCurveTo(2028.0, 267.7, 2031.2, 262.1, 2038.0, 258.4)
    ctx.bezierCurveTo(2059.7, 246.8, 2081.0, 234.8, 2102.6, 223.1)
    ctx.bezierCurveTo(2106.6, 221.1, 2110.7, 219.5, 2115.5, 221.5)
    ctx.bezierCurveTo(2115.9, 281.3, 2115.9, 341.1, 2115.9, 400.9)
    
    

    // layer1/Path
    
    ctx.moveTo(2113.3, 92.9)
    ctx.bezierCurveTo(2107.3, 94.9, 2102.1, 92.5, 2096.9, 89.7)
    ctx.bezierCurveTo(2076.8, 78.8, 2057.1, 68.0, 2037.1, 57.2)
    ctx.bezierCurveTo(2029.4, 53.2, 2025.8, 47.5, 2025.4, 39.5)
    ctx.bezierCurveTo(2025.4, 26.7, 2025.4, 13.7, 2025.4, 0.7)
    ctx.bezierCurveTo(2025.4, 0.3, 2113.2, -0.7, 2113.2, 0.7)
    ctx.bezierCurveTo(2113.2, 31.4, 2113.3, 62.2, 2113.3, 92.9)
}
