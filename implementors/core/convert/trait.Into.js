(function() {var implementors = {};
implementors["diem_network_address"] = [{"text":"impl Into&lt;String&gt; for DnsName","synthetic":false,"types":[]}];
implementors["storage_interface"] = [{"text":"impl&lt;'a&gt; Into&lt;(HashMap&lt;AccountAddress, AccountState, RandomState&gt;, HashMap&lt;HashValue, SparseMerkleProof&lt;AccountStateBlob&gt;, RandomState&gt;)&gt; for VerifiedStateView&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["vm"] = [{"text":"impl Into&lt;VMStatus&gt; for VMError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()