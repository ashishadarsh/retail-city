#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

long long maxPairWiseProduct(const std::vector<long long>&v,int n){
    int j=n-1;
    int i=0;
    long long maxPairWiseProducts=0;
    while(j>i){
        long long product=v[i]*v[j];
        maxPairWiseProducts=max(maxPairWiseProducts,product);
        j--;
        if(i==j){
            i++;
            j=n-1;
        }
    }
    return maxPairWiseProducts;
}
int main() {
	int n;
	std::cin>>n;
	std::vector<long long>v(n);
	for(int i=0;i<n;i++){
	    std::cin>>v[i];
	}
	std::cout<<maxPairWiseProduct(v,n);
	return 0;
}