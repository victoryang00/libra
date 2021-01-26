(function() {var implementors = {};
implementors["consensus"] = [{"text":"impl NewNetworkSender for ConsensusNetworkSender","synthetic":false,"types":[]}];
implementors["diem_mempool"] = [{"text":"impl NewNetworkSender for MempoolNetworkSender","synthetic":false,"types":[]}];
implementors["network"] = [];
implementors["network_builder"] = [{"text":"impl NewNetworkSender for DummyNetworkSender","synthetic":false,"types":[]}];
implementors["state_sync"] = [{"text":"impl NewNetworkSender for StateSyncSender","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()