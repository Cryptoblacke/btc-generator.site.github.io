function animate(typewriter) {
    var amount = localStorage.getItem("selected_amount");
    var delay;
    var instant;

    if(amount >= 0.1 && amount < 0.25) {
        delay = 90;
        instant = true;
    }

    if(amount >= 0.25 && amount < 0.50) {
        delay = 180;
        instant = true;
    }

    if(amount >= 0.50 && amount < 1.75) {
        delay = 300;
        instant = true;
    }

    if(amount >= 0.75 && amount <= 1.00) {
        delay = 380;
        instant = false;
    }


    sequence = [
        {
            text: "> Starting mining process...\n",
            delayAfter: delay,
            callback: function () {
                var percentage = 1;
                $(".current-status").fadeOut(function() {
                    $(this).text("Connecting...").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text(0).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "> Found undefined valid proxy routes []\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Injecting Transfer Requests into the Blockchain.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Spoofing Packets through IPV6 Tunnel...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Tunnelling via be6e:854229af:c9a::34\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "> Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "> Spoof Successful (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed....226.117.44.102\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed..... 16.81.2.148\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel...\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 4;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 1/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Tunnelling via f1d6:a7be22e2:6d8::a5\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Failed\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 7;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 1/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("3").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Tunnelling via f161:8dd4956e:b22::f1\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 59c3:e9724a52:39c::2c.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK)\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 13;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 1/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("5").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Request Failed......84.40.128.149\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED(FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via e7b1:3dcda615:29c::77\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via ac2d:6bdaec9a:9a5::2d\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "79.83.83.61...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "116.123.168.158...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "115.105.83.112...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 18;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 1/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("5").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("3").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Tunnelling via ae99:1ffac3f4:927::ea\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 6d61:3f4281cd:8f0::3f\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK)\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 21;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 1/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("7").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("3").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via a406:0a101efd:de3::fa\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "62.79.163.143...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED(FAIL).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via d4d8:52119016:f3a::1d\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Failed\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 3768:ef84e396:2d7::58\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "New BTC block generated...\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 26;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("8").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("4").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed...46.22.188.156 \n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Vulnerable Node Found at 183.9.25.156 \n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reading Blockchain Head...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "ea0d7613 f665ce14 4de1a1d5 668088c9 90eadb87\n dda97e16 5c286117 3ade0874 75c559a7 f7b71561\n 39d226e3 30ab7352 21dde7cb 6edd4bd8 b3bad704\n cf86f763 741569bc 9bda5aaf ee650061 84ab7888\n fc204b9c 5a34d042 4bd08d6 9f0714f2 88b60c25\n bf3adeaa d6144142 e2651076 5eb13ac1 9c2b3db0\n 6b9e46c8 970266fd ca75fae 2bd2aff 31a1e836\n 85efc613 a81994c1 c1e71eb 6788e9d0 \n",
            delayAfter: delay,
            instant: true
        },
        {
            text: "Parsing...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Writing to Blockchain Head\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "fb7fa163 3b1dcc83 94cd05c2 538ce18b ecb82a6b\n 106837e3 13ffbf3c 4e8bd365 5810def7 e2ede062\n 364e7990 1936ad63 d5a92dbf edda1463 88c0face\n 997c8d02 81efd88 3bb42b9c 1df415ec 838ef3d1\n b63f74e7 228e2427 ae50738b 2c6ae409 5a0b3e4c\n 4793a99a 4dc91ee5 15bf5af4 52fd46b8 842d9af8\n 95123cca e1f15519 72dc61da fa3d34a9 c0ed34a1 f7009fb8\n",
            delayAfter: delay,
            instant: true
        },
        {
            text: "Executing request\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Waiting for response...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "VERIFICATION SUCCESSFUL (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "New BTC block generated...\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 34;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("10").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("4").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("0").fadeIn();
                });
            }
        },
        {
            text: "Reconnecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability(OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed...22.124.139.4\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Vulnerable Node Found at 238.132.76.153.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reading Blockchain Head.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "dd5479d9 1f3df62a 2b719070 c299b37b\n 93681080 ea27f2ae f61b85c6 b4007e6d cc829267\n 3ed8e178 8fe4b231 b9fdd57a 4ba96def 2bf78a28\n 35dc7fd1 5086832b 296ea2a8 40a9d08f ed3a6fd9\n 2da26f8 dd5e0e68 bf6b149a ce6c7315 c2b81f90\n 6663e3df 5effd2ca 8b33ef5c a9ee0f94 41c4612f\n ed506599 fe959a3f bcd2a83d 6ef8d542 f3ab635c\n acf2f42d a0aba587 992f5808 db062b59 e23ede33\n 27a406c3 f126307 da33dbfa 71210375 2361cb95 901e1c0c \n",
            delayAfter: delay,
            instant: true
        },
        {
            text: "Parsing...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "New BTC block generated...\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 42;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("11").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("4").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
            }
        },
        {
            text: "Writing to Blockchain Head\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "a4a39607 b7bcb2 c97a9543 915ff557 ca9441a9\n 8719e8a6 1e449e1d e90501e3 3558d90f 526de8c9\n bc927cbe c86b98c8 5e79eec6 d5871e26 a0accf63\n 4ccdc4d 72fde90e 9d4177be 2f1ea657 b9d05e56\n e5adda68 b5422b39 4ddc20c3 fd1e2896 9dd25469\n c3122864 76337a8d 4c8c0dc3 9845bc7e bd0b8e67\n 25a60d9b 8640fa83 28b26052 df8cbc1f\n",
            delayAfter: delay,
            instant: true
        },
        {
            text: "Executing request\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Waiting for response...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "VERIFICATION SUCCESSFUL (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK).\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 51;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("14").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("5").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK) .\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 48fb:5c538148:509::81.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed...96.69.81.15 \n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain....\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 33d1:1cf94c27:9a4::25\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK)\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 59;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("15").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("6").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "10.16.71.61...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "223.131.15.4...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "223.131.15.4...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 11fb:e9e80212:2d9::1f.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "209.14.98.49...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "151.73.9.134...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Vulnerable Node Found at 46.20.141.108\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reading Blockchain Head\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "6ff40c8e b3bf52e a30828ae 1a628b0b 8189cd5\n b65fa53a a30d41fc c580c70f 8dfdc3db 664750ba\n bdee6acf abd607f5 3c04c7df 6b59629c f2e75c29\n 4222d87f dac1d29f 81bdbe6e e5e623fe 792fbc8e\n 6bb74378 bcbb4665 d953290b 86d1d2a9 bc98bd21\n 5afae076 2052156b 135b7b30 12d4a644 \n",
            delayAfter: delay,
            instant: true
        },
        {
            text: "Parsing...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Writing to Blockchain Head...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "dfd1c2d7 94782577 a14a0d1f 5ca3f176 3c78f1e7\n a5b75db9 15aad612 5bf00ad9 13bb9e29 cdcbb436\n e8a50494 bf8e94be a41d7579 d3b7dadd a892e41e\n 9d1f1300 82b1fcf7 7cf99908 d5f04ba0 ea202271\n 7ee9dc1e 4d10de8 298f7ac2 710de776 8b9cf7ee\n c0ce8c6e 846e54c9 4baab3e2 15613fb8 99ace3fb\n afd75244 164bf5b7 82bb4029 a791e2fb\n",
            delayAfter: delay,
            instant: true
        },
        {
            text: "Executing request...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Waiting for response.....\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "VERIFICATION SUCCESSFUL (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "New BTC block generated...\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 65;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("17").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("6").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
            }
        },
        {
            text: "Reconnecting to Blockchain Maintenance Channel...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK) \n",
            delayAfter: delay
        },
        {
            text: "75.93.182.112...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 8911:d4bd896a:88a::b9\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK).\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 74;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("20").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("7").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "60.121.129.28...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain....\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via b46e:a96e30de:c9d::e3\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Failed\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 1a7a:2dfe356c:19c::7c.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful(OK).\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 78;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("24").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("7").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("1").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability(OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "27.59.136.14...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "12.21.5.158... \n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Vulnerable Node Found at 238.39.53.86 \n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reading Blockchain Head\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "c91590b6 fc562e4e 489a8d54 48c235d6 13387525\n 80c7a0b0 27df887a 13c9a250 ae2b3b23 d180d1b1\n ce9de8d5 29887d41 c455ce24 d614366e 66ee1e18\n 2027baec b3447589 6e628251 d9075fde f3aaf0bc\n a8e21dc7 d97f1533 f4e0c2bb f4bff8a3 d5dfafe7\n f4827117 e32aa4a9 83289ee2 ba5739b0 e5940a74\n 81ff0e2d 8e53065b 52990ea3 c13f1948 2fd337a1 1749a8be 7569f7ff 7d127096 a82421d5 72b0c91c 17bbf08a 90b1b6ce 775142f0 4898746 \n",
            instant: true,
            delayAfter: delay
        },
        {
            text: "Parsing... \n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Writing to Blockchain Head \n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "a2fadf05 44f7ae5b 38106c32 64cc134 63f49f54\n 105783c8 6913b3da 559dad67 335a2468 d6a0eae5\n e1d7d487 e939f56a 4685fd3f 5fe34d39 3797d4af\n 398151b3 254ff7ff 46b1f3b6 beff5b3a 98c6dc09\n ed1fb156 e9a0a6f8 306a9e93 394efd3a aa12f541\n 46107f43 5ee25bfe ef2c6003 6d37b0c0 a5f9ceed\n e552231 e86e92cb \n",
            instant: true,
            delayAfter: delay
        },
        {
            text: "Executing request\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Waiting for response....\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "VERIFICATION SUCCESSFUL (OK)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "New BTC block generated\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 84;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("27").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("7").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Reconnecting to Blockchain Maintenance Channel...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connection Failed\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Tunnelling via 9dbb:a7455a6b:bfa::09\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 87;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("30").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("7").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK)\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 90;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("31").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("8").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability (OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "209.138.45.15...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed!\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "CONNECTION KILLED (FAIL)\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reconnecting to Blockchain...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoofing Packets through IPV6 Tunnel.\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 93;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("33").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("9").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Tunnelling via 90bc:effb2ed1:f9f::dc.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Connecting to Blockchain Maintenance Channel...\n",
            delayAfter: delay
        },
        {
            text: "Connection Established.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Spoof Successful (OK).\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 95;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 3/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("35").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("9").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "Checking Blockchain Nodes for Vulnerability(OK).\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Request Failed.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "154.66.121.31...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "33.99.89.150....\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Vulnerable Node Found at 33.99.89.150\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Reading Blockchain Head...\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                var percentage = 100;
                $(".progress").css({"width":percentage + "%"});
                $(".current-status").fadeOut(function() {
                    $(this).text("Server 2/3").fadeIn();
                });
                $(".status-share").fadeOut(function() {
                    $(this).text(percentage).fadeIn();
                });
                $(".total-generated").fadeOut(function() {
                    $(this).text((parseInt(localStorage.getItem("selected_amount")*percentage)/100).toFixed(5)).fadeIn();
                });
                $(".pools-scanned").fadeOut(function() {
                    $(this).text("35").fadeIn();
                });
                $(".pool-exploited").fadeOut(function() {
                    $(this).text("9").fadeIn();
                });
                $(".blockchain-injection").fadeOut(function() {
                    $(this).text("2").fadeIn();
                });
            }
        },
        {
            text: "610431cf 9ac6faea cefcbd8a 2290c70c 35220b57\n 14246288 6ffd067c d690ab93 a702ce9d 6a6ae0dd\n 38c3f119 123b2764 6ea9f860 ab83f43f ae7490df\n 7e1be4bc bc280525 a2b60bb1 29efbee5 b31dc1bb\n 396a4a1d 48aba186 2fad7899 db7306d6 e3d758eb\n 918aea1 6763cb0 f219f4fd 60b5f14c 6d246acc\n fc67aff3 69acfae d9f0c64c 43c99744 bd4e9ba0\n 2b84712f 712b437 133ce811 6f59fc92 d81ab1e5 18d25e6d\n",
            instant: true,
            delayAfter: delay
        },
        {
            text: "Parsing...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Writing to Blockchain Head.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "4a174e42 3e5dda44 8dba3256 d21d444b 81229289\n e08fd919 9c380ee7 25662d5b 4bcbf388 1e0e420e\n a909f166 87929395 e5764f56 77997896 f03d15e9\n 3889baaa c05a7711 ec068842 97ad3955 f8974297\n 70c18450 7633a824 f55fad60 9007105c 9d68993f\n 1f04d4d d206ccc9 60107f73 befb1b72 149c8c7b\n 53003299 a3f3b781\n",
            instant: true,
            delayAfter: delay
        },
        {
            text: "Executing request.\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "Waiting for response...\n",
            instant: instant,
            delayAfter: delay
        },
        {
            text: "VERIFICATION SUCCESSFUL (OK)\n",
            instant: instant,
            delayAfter: delay,
            callback: function () {
                $('#finalModal').modal({backdrop: 'static', keyboard: false});
                //var audioElement = document.createElement('audio');
                //audioElement.setAttribute('src', 'http://coin-generator.net/assets/content/assets/content/chaching.mp3');
                //audioElement.setAttribute('autoplay', 'autoplay');
                //audioElement.play();
                _paq.push(['trackGoal', 1]);
            }
        }

    ];
    typewriter.playSequence(sequence);
}
